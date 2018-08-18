const Statistic = require('../../../models/statistic');

exports.post = function(req, res) {
  var typeGame = req.body.typeGame;

  var newStatistic = Statistic({ type_game: typeGame });

  newStatistic.save(function(err) {
    if (err) return res.status(500).send('Error on the server: ' + err);
    res.status(200).send( {'sent': true });
  });
}
