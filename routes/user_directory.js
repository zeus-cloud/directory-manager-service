var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user_directory_model = require('../models/user_directory');

router.get('/:id', function(req, resp, next) {
    console.log(req.params.id);
    user_directory_model.find({user: req.params.id}, function(err, user_directories) {
        if(err) {
            console.log(err);
            return next(err);
        }
        resp.json(user_directories);
    })
});

router.put('/', function(req, resp, next) {
    user_directory_model.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if(err) {
            console.log(err);
            return next(err);
        }
        resp.json(post);
    })
});

module.exports = router;
