const Video = require('../models/video');

exports.post = function(req, res, done) {

  Video.findOne(
    {
      $or: [
             {  'link_720' : req.body.link_720 },
             {  'link_240' : req.body.link_240 }
           ]
    }
, function(err, video) {
    // In case of any error, return using the done method 
    if (err){
      console.log('Ошибка при добавлении видео: '+ err);
      return done(err);
    }
    // already exists
    if (video) {
      return res.sendStatus(403);
      res.json('Видео с такой ссылкой уже существует: ' + req.body.link_720 + '' + req.body.link_240);
    } else {
      var newVideo = new Video();

      if( req.body.link_720.length > 0)
      {
          newVideo.link_720 = req.body.link_720;
      }
      if( req.body.link_240.length > 0)
      {
          newVideo.link_240 = req.body.link_240;
      }

      newVideo.time = req.body.time;
      newVideo.category = req.body.category;

      // save the video
      newVideo.save(function(err) {
        if (err){
          console.log('Ошибка при сохранении видео: ' + err);
          throw err;
        }
        console.log('Видео успешно добавлено');

        return done(null, newVideo);

      });
      return res.sendStatus(200);
    }
  });

};
