const https = require("https")
const express = require("express")
var app = express()

app.get("/", function (req, res) {
  res.send("NBA-Scoreboard-Backend Home")
});

app.get("/score/today", function (req, res) {
  https.get("https://china.nba.com/static/data/scores/miniscoreboard.json", (result) => {
    if (result.statusCode == 304) {
      //Not Modified
      res.statusCode(304).send()
    }
    if (result.statusCode == 200) {
      res.send(result)
    }
  })
})