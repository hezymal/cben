const lodash = require("lodash");
const cheerio = require("cheerio");
const axios = require("axios");

const BASE_URL = "http://boxrec.com/en/schedule";
const HEADER_DATE_PARSE_REGEX = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;

class BoxRecComParser {
  constructor() {
    this.html = null;
  }

  read(callback) {
    this.readHtml(html => {
      const $html = cheerio.load(html);
      const events = [];

      lodash.map(
        $html("#calendarSchedule").children(),
        (block) => {
          const $block = cheerio(block);
          const tagName = $block.prop("tagName");

          if (tagName === "THEAD") {
            const $info = $block.find("tr > td.bgShow table > tbody > tr");

            if ($info.length) {
              const date = $info.eq(0).find("a").attr("href");

              const event = {};
              event.id = events.length;
              event.date = this.parseDate(date, HEADER_DATE_PARSE_REGEX);
              event.location = $info.eq(1).text().trim();
              event.commission = $info.eq(2).children().last().text().trim();
              event.promoter = $info.eq(3).children().last().text().trim();
              event.matchmaker = $info.eq(4).children().last().text().trim();
              event.television = $info.eq(5).children().last().text().trim();
              event.fights = [];

              events.push(event);
            }
          } else if (tagName === "TBODY") {
            const $info = $block.children(".scheduleRow, .drawRowBorder");

            if ($info.length) {
              let boxerIterator = 0;
              const fights = [];

              lodash.map(
                $info,
                (element) => {
                  const $data = cheerio(element).children();

                  const $red = $data.eq(2).children("a");
                  const $blue = $data.eq(6).children("a");

                  const fight = {
                    id: fights.length,
                    division: $data.eq(1).text().trim(),
                    red: {
                      id: fights.length * 2,
                      name: $red.length ? $red.text().trim() : "",
                      record: $data.eq(3).text().trim()
                    },
                    blue: {
                      id: fights.length * 2 + 1,
                      name: $blue.length ? $blue.text().trim() : "",
                      record: $data.eq(7).text().trim()
                    }
                  };

                  fights.push(fight);
                }
              );

              lodash.last(events).fights = fights;
            }
          }
        }
      );

      callback(events);
    });
  }

  readHtml(callback) {
    if (this.html) {
      callback(this.html);
    } else {
      axios
        .get(BASE_URL)
        .then(page => {
          this.html = page.data;
          callback(this.html);
        })
        .catch(error => {
          throw error;
        });
    }
  }

  parseDate(text, regex) {
    var match = text.match(regex);

    if (match && match.length) {
      return new Date(match[0]);
    }

    return null;
  }
}

module.exports = BoxRecComParser;
