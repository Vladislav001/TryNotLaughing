const Statistic = require('../../../models/statistic');

exports.post = function(req, res) {
  var typeGame = req.body[0].typeGame;

  // Удалим тип игры
  req.body.splice(0, 1);

  var newStatistic = Statistic({ type_game: typeGame, videos:  req.body});
  
  newStatistic.save(function(err) {
    if (err) return res.status(500).send('Error on the server: ' + err);
    res.status(200).send( {'sent': true });
  });
}
