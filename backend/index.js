const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose.connect(process.env.MONGDB_URL, () => {
  console.log("connect to mongoose db");
});

app.listen(3002, () => {
  console.log("Express app listening on port 3001");
});
