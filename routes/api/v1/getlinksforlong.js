const Video = require('../../../models/video');

exports.post = function(req, res) {
  var totalTime = parseInt(req.body.total_time);
  var timeVideos = 0;
  var longVideos = [];

  var timeVideos = Number(0);

//   getTime(Video, function(timeV) {
//   console.log(timeV + ' callback') ;
//   timeVideos += timeV;
//   console.log(timeVideos + ' callback') ;
// });

getTime(0, totalTime, function(timeV) {
    console.log(timeV + " finished") ;
  }
);




// Получим рандомные Long видео
// Video.aggregate(
//   [ { $match: { category: 'Long' } }, { $sample: { size: 1 } }] , function (err, randomLongVideos) {
//     if (err) return res.status(500).send('Error on the server: ' + err);
//
//     // Наберем массив роликов, с общей продолжительностью равной заданной
//     // Сформируем массив для передачи
//     // randomLongVideos.forEach(function(element) {
//     //   longVideos.push(element.link);
//     // });
//
//
//
//     res.status(200).send(
//       {
//         longVideos
//       }
//     );
//
//   });
}
function getTime(currentTimeVideo, totalTimeVideo, callback) {
  Video.aggregate(
    [ { $match: { category: 'Long' } }, { $sample: { size: 1 } }] ,
    function (err, randomLongVideos) {

      if (err) return res.status(500).send('Error on the server: ' + err);

      timeVideo = randomLongVideos[0].time;
      currentTimeVideo += timeVideo

      console.log( randomLongVideos[0].link + ' link') ;
      console.log( randomLongVideos[0].time + ' time') ;

      if (currentTimeVideo >= totalTimeVideo) {

          console.log(currentTimeVideo + ' currentTimeVideo') ;
          console.log(totalTimeVideo + ' totalTimeVideo') ;
          callback(currentTimeVideo);

      } else {
        getTime(currentTimeVideo, totalTimeVideo, callback);
      }

    });
  }
