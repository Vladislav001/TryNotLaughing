const Statistic = require('../../../models/statistic');

exports.post = function(req, res) {
  var typeGame = req.body.typeGame;
  var videos = req.body.videos

  var newStatistic = Statistic({ type_game: typeGame, videos: videos});

  newStatistic.save(function(err) {
    if (err) return res.status(500).send('Error on the server: ' + err);
    res.status(200).send( {'sent': true });
  });
}
