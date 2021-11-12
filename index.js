const express = require("express");
var app = express();
var dataStorage = require("./dataStorage");
var modifier = require("./modifier");

app.get("/", function (req, res) {
  //Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send("NBA-Scoreboard-Backend Home");
});

app.get("/score/today", function (req, res) {
  //Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  dataStorage.get("https://china.nba.com/static/data/scores/miniscoreboardlive.json")
    .then((result) => {
      res.send(modifier.today(result));
    })
    .reject((status) => res.sendStatus(status)).send();
});

app.get("/score/previous", function (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  dataStorage.get("https://china.nba.com/static/data/scores/miniscoreboard.json")
    .then((result) => {
      res.send(modifier.previous(result));
    })
    .reject((status) => res.sendStatus(status)).send();
});

app.get("/score/next", function (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  dataStorage.get("https://china.nba.com/static/data/scores/miniscoreboard.json")
    .then((result) => {
      res.send(modifier.next(result));
    })
    .reject((status) => res.sendStatus(status)).send();
});

app.listen(5000);