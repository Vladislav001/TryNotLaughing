const Video = require('../../../models/video');

exports.get = function(req, res) {
  // Получим рандомное Vine видео
  Video.aggregate(
    [ { $match: { category: 'Vine' } }, { $sample: { size: 1 } }] , function (err, randomPrevVineVideo) {
      if (err) return res.status(500).send('Error on the server: ' + err);
      // Получим рандомное Long видео
      Video.aggregate(
        [ { $match: { category: 'Long' } }, { $sample: { size: 1 } }] , function (err, randomPrevLongVideo) {
          if (err) return res.status(500).send('Error on the server: ' + err);

          if( randomPrevVineVideo.length > 0 && randomPrevLongVideo.length > 0 ) {
            res.status(200).send(
              {
                "LinkOnVineVideo": randomPrevVineVideo[0].link,
                "LinkOnLongVideo": randomPrevLongVideo[0].link
              }
            );
          } else {
            res.status(200).send(
              {
                "answer": "В БД нет vine или long видео",
              }
            );
          }
        });
      });
    }
