// var url = "http://mylogger.io/log";
const EventEmitter = require("events"); //Class

// console.log(__filename);
class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message);
    //Raise a event
    this.emit("messageLogged", { id: 1, ulr: "http://" });
  }
}

module.exports = Logger;
// module.exports.endPoint = url;
