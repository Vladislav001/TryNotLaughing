const Video = require('../../../models/video');

exports.post = function(req, res) {
  var countVideos = parseInt(req.body.rounds);
  var minMinutes = parseInt(req.body.min_minutes);
  var longVideos = [];

  // Получим рандомные Long видео
  Video.aggregate(
    [ { $match: { category: 'Long', time: { $gte: minMinutes } } }, { $sample: { size: countVideos } }] , function (err, randomLongVideos) {
      if (err) return res.status(500).send('Error on the server: ' + err);

      // Сформируем массив для передачи
      randomLongVideos.forEach(function(element) {
        longVideos.push(element.link);
      });

      res.status(200).send(
        {
          longVideos
        }
      );
    });
  }
