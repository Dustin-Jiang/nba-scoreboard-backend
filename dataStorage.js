const axios = require("axios");

exports.cache = {};
exports.lastModify = 0;

exports.sayHello = () => {
  console.log("hello");
};

exports.get = (url) => {
  return new Promise((resolve, reject) => {
    time = new Date().getTime();
    if (time >= this.lastModify + 120000) {
      this.update(url).then((result) => {
        resolve(result);
      }).reject((status) => reject(status));
    } else {
      resolve(this.cache[url]).reject((status) => reject(status));
    }
  });
};

exports.update = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      if (res.status == 304) {
        //Not Modified
        resolve(this.cache[url]);
      }
      if (res.status == 200) {
        this.cache[url] = res.data;
        this.lastModify = new Date().getTime();
        resolve(this.cache[url]);
      }
      else {
        reject(res.status);
      }
    });
  });
};