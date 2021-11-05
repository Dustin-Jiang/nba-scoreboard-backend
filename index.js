const https = require("https")
const express = require("express")
var app = express()
const dataStorage = require("./dataStorage")

app.get("/", function (req, res) {
  res.send("NBA-Scoreboard-Backend Home")
});

app.get("/score/today", function (req, res) {
  
})