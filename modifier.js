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
    game = {};
    game.status = i.boxscore.statusDesc;
    game.homeTeam = i.homeTeam.profile;
    game.awayTeam = i.awayTeam.profile;
    game.score = {
      homeScore: i.boxscore.homeScore,
      awayScore: i.boxscore.awayScore,
      winner: (i.boxscore.homeScore > i.boxscore.awayScore) ? "home" : "away"
    };
    result.games.push(game);
  }
  return result;
}