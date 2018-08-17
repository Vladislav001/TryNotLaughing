const Recall = require('../../../models/recall');

exports.post = function(req, res) {
  var rating = req.body.rating;
  var comment = req.body.comment;

  var newRecall = Recall({ rating: rating, comment: comment });

  newRecall.save(function(err) {
    if (err) return res.status(500).send('Error on the server: ' + err);
    res.status(200).send( {'sent': true });
  });
}
