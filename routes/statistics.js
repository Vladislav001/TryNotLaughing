const Statistic = require('../models/statistic');

exports.get = function(req, res) {

  var statisticsVideos = [];
  var longVideos = [];
  var vineVideos = [];

  Statistic.find({},  function(err, statistics) {
    // console.log(statistics[0].type_game);
    // console.log(statistics[0].videos[1].link);

    // Соберем массивы со статистикой
    for (var i = 0; i < statistics.length; i++) {
      var videos = [];
      videos[statistics[i].type_game] = []; // категория

      for (var j = 0; j < statistics[i].videos.length; j++) {
        videos[statistics[i].type_game][statistics[i].videos[j].link] = []; // категория => ссылка
        videos[statistics[i].type_game][statistics[i].videos[j].link]["TYPE_GAME"] = statistics[i].type_game;
        videos[statistics[i].type_game][statistics[i].videos[j].link]["COUNT_PLAYER_1"] = statistics[i].videos[j].countPlayer1; // категория => ссылка => COUNT_PLAYER_1
        videos[statistics[i].type_game][statistics[i].videos[j].link]["COUNT_PLAYER_2"] = statistics[i].videos[j].countPlayer2;
        videos[statistics[i].type_game][statistics[i].videos[j].link]["ALL"] = statistics[i].videos[j].countPlayer1 + statistics[i].videos[j].countPlayer2;
        statisticsVideos.push(videos);
      }
    }

    //console.log(statisticsVideos);

    // Отфильтруем массивы, если одинаковы ссылки ролико в одной и той же категории - сложим записи
    statisticsVideos.forEach(function(video) {
    //  console.log(video);

    Object.keys(video).forEach(function(key) {
      //console.log(key, ':', this[key]);

    }, video);

    });

    res.render('statistics', {
      statistics: statistics
    });
  });

};
