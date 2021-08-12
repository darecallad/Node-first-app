var url = "http://mylogger.io/log";

console.log(__filename);

function log(message) {
  //Send an HTTP request
  console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url;
