const express = require("express");
const app = express();
const db = require("./database");

db.getConnection()
  .then((res) => {
    console.log("connected to DB");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
