const axios = require("axios");

exports.cache = "";
exports.lastModify = 0;

exports.sayHello = () => {
  console.log("hello");
};

exports.get = () => {
  return new Promise((resolve, reject) => {
    time = new Date().getTime();
    if (time >= this.lastModify + 120000) {
      this.update().then((result) => {
        resolve(result);
      });
    } else {
      resolve(this.cache);
    }
  });
};

exports.update = () => {
  return new Promise((resolve, reject) => {
    apiUrl = "https://china.nba.com/static/data/scores/miniscoreboard.json";

    axios.get(apiUrl).then((res) => {
      if (res.status == 304) {
        //Not Modified
        resolve(this.cache);
      }
      if (res.status == 200) {
        this.cache = res.data;
        this.lastModify = new Date().getTime();
        resolve(this.cache);
      }
      else {
        reject(res.status);
      }
    });
  });
};