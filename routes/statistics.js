const Statistic = require('../models/statistic');

exports.get = function(req, res) {

  Statistic.find({},  function(err, statistics) {
    // console.log(statistics[0].type_game);
    // console.log(statistics[0].videos[1].link);

    res.render('statistics', {
      statistics: statistics
    });
  });

};
