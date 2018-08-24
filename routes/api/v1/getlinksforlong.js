const Video = require('../../../models/video');

exports.post = function(req, res) {
  var totalTime = parseInt(req.body.total_time);
  var timeVideos = 0;
  var longVideos = [];

  getVideos(0, totalTime, longVideos, function(timeV) {
    console.log(timeV + " finished") ;
    res.status(200).send(
      {
        longVideos
      }
    );
  }
);

}

// Получим массив роликов с общим временем ">=" заданному пользователем
function getVideos(currentTimeVideo, totalTimeVideo, longVideos, callback) {
  Video.aggregate(
    [ { $match: { category: 'Long' } }, { $sample: { size: 1 } }] ,
    function (err, randomLongVideos) {

      if (err) return res.status(500).send('Error on the server: ' + err);

      timeVideo = randomLongVideos[0].time;
      currentTimeVideo += timeVideo

      if(longVideos.indexOf(randomLongVideos[0].link_720) == -1) {
        longVideos.push(randomLongVideos[0].link_720);
      }

      if (currentTimeVideo >= totalTimeVideo) {
        callback(currentTimeVideo);
      } else {
        getVideos(currentTimeVideo, totalTimeVideo, longVideos, callback);
      }

    });
  }
