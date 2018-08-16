var Video = require('../models/video');
var express = require('express');

exports.post = function(req, res) {
  Video.remove({ _id: req.params.idTag }, function (err) {
    if (err) return next(err)
    res.redirect('/videos');
  });
};
