var express = require('express');
var router = express.Router();
var isAuthenticated = require('../middleware/isAuthenticated');
//var verifyToken = require('../middleware/verifyToken');
var Student = require('../models/user');

module.exports = function(passport){

  router.get('/', require('./main').get);
  router.get('/personalArea', isAuthenticated, require('./personalArea').get);
  router.get('/videos', isAuthenticated, require('./videos').get);

  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/personalArea',
    failureRedirect: '/',
    failureFlash : true
  }));
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/personalArea',
    failureRedirect: '/',
    failureFlash : true
  }));
  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.post('/addNewVideo', require('./addVideo').post);
  router.post('/deleteVideo/id:idTag', require('./deleteVideo').post);
  // API
  //  router.get('/api/v1/informationStudent', require('./api/v1/informationStudent').get);

  return router;
}
