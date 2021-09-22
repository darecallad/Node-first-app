const express = require("express");
const router = express.Router();
const { Test } = require("./testes");

router.get("/", async (req, res) => {
  const test = await Test.find().sort("name");
  res.send(test);
});

module.exports = router;
