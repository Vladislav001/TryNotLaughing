const Video = require('../../../models/video');

exports.post = function(req, res) {
  var countRaunds = parseInt(req.body.raunds);
  var vineVideos = [];

  // Получим рандомные Vine видео
  Video.aggregate(
    [ { $match: { category: 'Vine' } }, { $sample: { size: countRaunds } }] , function (err, randomVineVideos) {
      if (err) return res.status(500).send('Error on the server: ' + err);

      // Сформируем массив для передачи
      randomVineVideos.forEach(function(element) {
      vineVideos.push(element.link);
      });

      res.status(200).send(
        {
        vineVideos
        }
      );
    });
  }
