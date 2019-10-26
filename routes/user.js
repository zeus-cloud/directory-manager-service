var router = require('express').Router();
var mongoose = require('mongoose');
var user_model = require('../models/user');

router.get('/:id', function(req, resp, next) {
    user_model.findById(req.params.id, function(err, user) {
        if(err) {
            console.log(err);
            return next(err);
        }
        resp.json(user);
    });
});

router.get('/', function(req, resp, next) {
    user_model.findOne({}, function(err, user) {
        if(err) {
            console.log(err);
            return next(err);
        }
        resp.json(user);
    });
});

module.exports = router;

