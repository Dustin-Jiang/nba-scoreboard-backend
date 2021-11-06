exports.today = function (obj) {
  return nbaParser(obj.payload.today);
};

exports.previous = function (obj) {
  return nbaParser(obj.payload.previous);
};

exports.next = function (obj) {
  return nbaParser(obj.payload.next);
};

function nbaParser(obj) {
  result = {};

  result.count = obj.gameCount;
  result.games = [];

  for (var i of obj.games) {
    //To ignore the uncertain score
    isFuture = (i.boxscore.statusDesc === null)

    game = {};
    game.status = (isFuture) ? "未开始" : i.boxscore.statusDesc;
    game.homeTeam = i.homeTeam.profile;
    game.awayTeam = i.awayTeam.profile;
    game.score = {
      //Replace the score in future with dash
      homeScore: (isFuture) ? "--" : i.boxscore.homeScore,
      awayScore: (isFuture) ? "--" : i.boxscore.awayScore,
      winner: (isFuture) ? "" :
        (i.boxscore.homeScore > i.boxscore.awayScore) ? "home" : "away"
    };
    result.games.push(game);
  }
  return result;
}