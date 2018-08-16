var Video = require('../models/video');
var express = require('express');

exports.get = function(req, res) {

  Video.find({},  function(err, videos) {
    res.render('videos', {
      user: req.user,
      videos: videos
    });
  });

};
