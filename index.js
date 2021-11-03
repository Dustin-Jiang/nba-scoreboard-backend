const https = require("https")
const express = require("express")
var app = express()

app.get("/", function(req, res) {
    res.send("NBA-Scoreboard-Backend Home")
});

app.get("/score", function(req, res) {
    
})