const PORT = 3000;
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const myLogg = (req, res, next) => {
  console.log("hello middleware!");
  next();
};

app.use(bodyParser.json());
app.use(myLogg);

app.get("/vehicles", (req, res) => {
  res.send("hello");
});

app.post("/vehicles", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`I am listening on port: ${PORT}`);
});
