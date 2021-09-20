const Logger = require("./logger");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ABC");
});

app.get("/:id/:year", (req, res) => {
  res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen on port ${port}...`));
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

// const port = process.env.PORT;
// console.log(port);
