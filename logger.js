// var url = "http://mylogger.io/log";
const EventEmitter = require("events"); //Class

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1 });
  }
}

module.exports = Logger;
// console.log(module);
