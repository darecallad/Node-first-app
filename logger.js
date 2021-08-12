var url = "http://mylogger.io/log";
const EventEmitter = require("events"); //Class
const emitter = new EventEmitter();

console.log(__filename);

function log(message) {
  //Send an HTTP request
  console.log(message);
  //Raise a event
  emitter.emit("messageLogged", { id: 1, ulr: "http://" });
}

module.exports = log;
// module.exports.endPoint = url;
