var express = require('express');
var user = require('../models/user');

exports.get = function(req, res) {
    res.render('personalArea');
}
