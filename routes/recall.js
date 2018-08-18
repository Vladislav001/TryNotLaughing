const Recall = require('../models/recall');
var express = require('express');
var router = express.Router();

exports.get = function(req, res) {

  var perPage = 10; // сколько записей отображать
  var page = req.params.page || 1;

  Recall // получаем объекты
      .find({})
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec(function(err, recalls) {
          Recall.find({}).count().exec(function(err, count) { // получаем кол-во объектов
              if (err) return next(err)
              res.render('recall', {
                  recalls: recalls,
                  current: page,
                  pages: Math.ceil(count / perPage),
              })
          })
      })
};
