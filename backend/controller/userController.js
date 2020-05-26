const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

router.use(bodyParser.urlencoded({ extended:true }));

const User = require('../model/User');

//CreateUser
router.post('/joinUser', (req, res) => {
    console.log(req.body);
    
    mongoose.connection.db.collection("users", function(err, collection){
        collection.find({'id' : req.body._id}).toArray(function(err, data){
                console.log('query : ', data);
            if(data) {
                return res.status(200).send(false);
            }
        })
    });

    User.create({
        id : req.body._id,
        password : req.body._password,
        nickName : req.body._nickName
    },
    (err, user) => {
        if(err)return res.status(500).send(false);
        res.status(200).send(user);
    });
});

module.exports = router;