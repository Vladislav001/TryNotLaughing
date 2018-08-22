const Statistic = require('../models/statistic');

exports.get = function(req, res) {

  var statisticsVideos = [];

  Statistic.find({},  function(err, statistics) {
    // console.log(statistics[0].type_game);
    // console.log(statistics[0].videos[1].link);

    // Соберем массивы со статистикой
    for (var i = 0; i < statistics.length; i++) {
      statisticsVideos[statistics[i].id] = []; // категория

      for (var j = 0; j < statistics[i].videos.length; j++) {
      //  console.log(statistics[i].id[j].link + ' statistics[i].videos[j].link');

        statisticsVideos[statistics[i].id][statistics[i].videos[j].link] = []; // категория => ссылка

        statisticsVideos[statistics[i].id][statistics[i].videos[j].link]["TYPE_GAME"] = statistics[i].type_game;
        statisticsVideos[statistics[i].id][statistics[i].videos[j].link]["COUNT_PLAYER_1"] = statistics[i].videos[j].countPlayer1; // категория => ссылка => COUNT_PLAYER_1
        statisticsVideos[statistics[i].id][statistics[i].videos[j].link]["COUNT_PLAYER_2"] = statistics[i].videos[j].countPlayer2;
        statisticsVideos[statistics[i].id][statistics[i].videos[j].link]["ALL"] = statistics[i].videos[j].countPlayer1 + statistics[i].videos[j].countPlayer2;
      }
    }

    // console.log(statisticsVideos);

    // Отфильтруем массивы, если одинаковы ссылки ролико в одной и той же категории - сложим записи

    res.render('statistics', {
      statistics: statistics
    });
  });

};
