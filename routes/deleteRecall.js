const Recall = require('../models/recall');

exports.post = function(req, res) {
  Recall.remove({ _id: req.params.idTag }, function (err) {
    if (err) return next(err)
    res.redirect('/recall/1');
  });
};
