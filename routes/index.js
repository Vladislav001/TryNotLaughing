const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');
//const verifyToken = require('../middleware/verifyToken');
const Student = require('../models/user');

module.exports = function(passport){

  router.get('/', require('./main').get);
  router.get('/personalArea', isAuthenticated, require('./personalArea').get);
  router.get('/videos', isAuthenticated, require('./videos').get);
  router.get('/statistics', isAuthenticated, require('./statistics').get);
  router.get('/recall/:page', isAuthenticated, require('./recall').get);
  router.get('/test', require('./test').get);


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
  router.post('/deleteRecall/id:idTag', require('./deleteRecall').post);

  // API
  router.get('/api/v1/getLinksForPreview', require('./api/v1/getlinksforpreview').get);
  router.post('/api/v1/getLinksforVine', require('./api/v1/getlinksforvine').post);
  router.post('/api/v1/getLinksforLong', require('./api/v1/getlinksforlong').post);
  router.post('/api/v1/postStatistics', require('./api/v1/poststatistics').post);
  router.post('/api/v1/postRecall', require('./api/v1/postrecall').post);

  return router;
}
