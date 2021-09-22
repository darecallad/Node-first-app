const mongoose = require("mongoose");
const test = require("./test");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected"))
  .catch((ex) => console.log("not connect"));

// function getUser() {
//   setTimeout(() => {
//     console.log("Getting User Information...");
//   }, 2000);
// }

app.use(express.json());
app.use("api/test", test);

const port = process.env.PORT || 3000;
app.listen(`listen on port ${port}....`);
