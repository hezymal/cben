const lodash = require('lodash');
const cheerio = require('cheerio');
const axios = require('axios');

const BASE_URL = 'http://boxrec.com/en/schedule';
const HEADER_DATE_PARSE_REGEX = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;

class BoxRecComParser
{
  constructor() {
    this.html = null;
  }

  read(callback) {
    this.readHtml(html => {
      const $html = cheerio.load(html);
      const $sheldures = $html('#calendarSchedule').children();

      const event = {};
      let idIterator = 0;
      
      const events = lodash.reduce($sheldures, (events, block) => {
        const $block = cheerio(block);
        const tagName = $block.prop("tagName");

        if (tagName === "THEAD") {
          const $info = $block.find('tr > td.bgShow table > tbody > tr');

          if ($info.length) {
            var $date = $info.eq(0).find('a');

            event.id = idIterator;
            event.date = this.parseDate($date.attr('href'), HEADER_DATE_PARSE_REGEX);
            event.location = $info.eq(1).text().trim();
            event.commission = $info.eq(2).children().last().text().trim();
            event.promoter = $info.eq(3).children().last().text().trim();
            event.matchmaker = $info.eq(4).children().last().text().trim();
            event.television = $info.eq(5).children().last().text().trim();
          }
        } else if (tagName === "TBODY") {
          const $info = $block.find('.scheduleRow');

          if ($info.length) {
            let fightIdIterator = 0;

            event.fights = lodash.reduce($info, (fights, element) => {
              const $data = cheerio(element).children();
              
              const $red = $data.eq(2).children('a');
              const $blue = $data.eq(6).children('a');
              
              fights.push({
                id: fightIdIterator,
                division: $data.eq(1).text().trim(),
                red: {
                  name: $red.length ? $red.text().trim() : null,
                  record: $data.eq(3).text().trim(),
                },
                blue: {
                  name: $blue.length ? $blue.text().trim() : null,
                  record: $data.eq(7).text().trim(),
                },
              });

              fightIdIterator++;

              return fights;
            }, []);

            events.push(event);

            idIterator++;
          }
        }

        return events;
      }, []);

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
        .catch(error => throw new Exception(error));
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
