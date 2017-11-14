const BoxRecComParser = require("../library/BoxRecComParser");

module.exports = function(request, response) {
  const parser = new BoxRecComParser();
  parser.read(events => response.send(JSON.stringify(events)));
};
