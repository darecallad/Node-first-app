const mongoose = require("mongoose");

const Test = mongoose.model(
  "Test",
  new mongoose.Schema({
    name: String,
  })
);

const test = new Test({ name: "ABC" });
test.save();

exports.Test = Test;
