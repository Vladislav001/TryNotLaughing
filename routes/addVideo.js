var Video = require('../models/video');
var express = require('express');

exports.post = function(req, res, done) {

  Video.findOne({ 'link' : req.body.link }, function(err, video) {
    // In case of any error, return using the done method
    if (err){
      console.log('Ошибка при добавлении видео: '+ err);
      return done(err);
    }
    // already exists
    if (video) {
      return res.sendStatus(403);
      res.json('Видео с такой ссылкой уже существует: ' + req.body.link);
    } else {
      var newVideo = new Video();
 
      newVideo.link = req.body.link;
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
