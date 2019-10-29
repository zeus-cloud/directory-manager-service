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
        if(user){
          resp.json(user);
        } else {
          var userObject = new user_model({
              name: 'zeus-admin'
          });
          userObject.save().then((result) => {
              resp.send(result);
          });
        }

    })
});

module.exports = router;
