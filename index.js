const express = require("express")
var app = express()
var dataStorage = require("./dataStorage")

app.get("/", function (req, res) {
  res.send("NBA-Scoreboard-Backend Home")
});

app.get("/score/today", function (req, res) {
  dataStorage.get()
  .then((result) => {
    res.send(result)
  })
})

app.listen(5000)