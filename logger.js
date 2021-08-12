// var url = "http://mylogger.io/log";
const EventEmitter = require("events"); //Class

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
  }
}

module.exports = Logger;
