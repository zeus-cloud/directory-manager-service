var router = require('express').Router();
var mongoose = require('mongoose');
var user_model = require('../models/user');

router.get('/:id', function(req, resp, next) {
    user_model.findById(req.params.id, function(err, user) {
        resp.json(user);
    });
});

router.get('/', function(req, resp, next) {
    user_model.findOne({}, function(err, user) {
        console.log(user);
        resp.json(user);
    });
});

module.exports = router;

