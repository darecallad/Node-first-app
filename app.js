const Logger = require("./logger");

// Module System
// Node Package NPM
// RESTFUl API
// Async JS
// Storing Data in MongoDB
// Authentication and Authorization
// Handling and Logging Error
// Unit Testing
// Test Driven Development TDD
// Deployment

// console.log(module);
const log = new Logger();

log.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});
log.log("message");
