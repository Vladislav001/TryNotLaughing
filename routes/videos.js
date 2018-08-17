const Video = require('../models/video');

exports.get = function(req, res) {

  Video.find({},  function(err, videos) {
    res.render('videos', {
      user: req.user,
      videos: videos
    });
  });

};
