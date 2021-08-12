// function sayHello(name) {
//   console.log("Hello" + name);
// }

// const logger = require("./logger");
// console.log(logger);

// logger.log("message");

// window obj
// console.log() //global
// setTimeout(); // call function after delay
// clearTimeout();
// setInterval();
// clearInterval();
// var
// global.console.log();

//Path Module
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// //OS Module

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`free Memory: ${freeMemory}`);

// // File System Module

// const fs = require("fs");
// const file = fs.readdirSync("./");
// console.log(file);

// fs.readdir("./", function (ex, files) {
//   if (ex) console.log("Error", ex);
//   else console.log("Result", files);
// });

//Event Module
// const EventEmitter = require("events"); //Class

//Order is important

// const Logger = require("./logger");
// const logger = new Logger();

// //Register a listener
// logger.on("messageLogged", (arg) => {
//   console.log("Listener call", arg);
// });
// logger.log("message");

const Logger = require("./logger");
const logger = new Logger();

logger.log("Test 123");

//HTTp Module
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("New Connection");
// });

server.listen(3000);
console.log("listen on port 3000...");
