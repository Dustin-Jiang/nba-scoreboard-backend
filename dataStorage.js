var dataStorage = {
  cache = "",
  lastModify = 0
}

class NetworkError extends Error {
  constructor(this, statusCode = 404) {
    this.statusCode = statusCode;
  }
}

dataStorage.get= function() {
  if (new Date().getDate() >= this.lastModify + 180000) { 
    try {
      this.cache = this.update()
    }
    catch(err) {
      if(err instanceof NetworkError) {
        console.log(err.statusCode)
        return(err.statusCode)
      }
    }
  }
}

dataStorage.update = function() {
  apiUrl = "https://china.nba.com/static/data/scores/miniscoreboard.json"

  https.get(apiUrl, (result) => {
    if (result.statusCode == 304) {
      //Not Modified
      this.lastModify = new Date().getTime()
    }
    if (result.statusCode == 200) {
      this.cache = result.data
      this.lastModify = new Date().getTime()
    }
    else {
      throw NetworkError(result.statusCode)
    }
  })
}

modules.exports = {
  dataStorage
}