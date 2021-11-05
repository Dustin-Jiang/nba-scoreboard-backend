const express = require("express")
var app = express()
var dataStorage = require("./dataStorage")
var modifier = require("./modifier")

app.get("/", function (req, res) {
  //Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send("NBA-Scoreboard-Backend Home")
});

app.get("/score/today", function (req, res) {
  //Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*')

  dataStorage.get()
  .then((result) => {
    res.send(modifier.today(result))
  })
})

app.listen(5000)