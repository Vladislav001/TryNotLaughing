const Statistic = require('../models/statistic');

exports.get = function(req, res) {

  var statisticsVideos = []

  Statistic.find({},  function(err, statistics) {
    // console.log(statistics[0].type_game);
    // console.log(statistics[0].videos[1].link);



console.log(statisticsVideos);
    res.render('statistics', {
      statistics: statistics
    });
  });

};

Statistic.distinct('type_game')
