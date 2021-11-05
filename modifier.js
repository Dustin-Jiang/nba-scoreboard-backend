exports.today = function (obj) {
  obj = obj.payload.today;
  console.log(obj)
  result = {};

  result.count = obj.gameCount;
  result.games = [];
  for (var i of obj.games) {
    console.log(i)
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

  return result
}