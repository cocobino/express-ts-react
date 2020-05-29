const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userService = require('../service/userService');

router.use(bodyParser.urlencoded({ extended:true }));

const User = require('../model/User');

//CreateUser
router.post('/joinUser', (req, res) => {
    userService.checkDuplication('users', 'id', req.body._id)
    .then((d) => {
        console.log(d);
        if(!d.length) {
            User.create({
                id : req.body._id,
                password : req.body._password,
                nickName : req.body._nickName,
                friendList : []
            },
            (err, user) => {
                if(err)return res.status(500).send(err);
                res.status(200).send(true);
            });
        } else {
            res.status(200).send('duple');
        }
    })
    .catch((err) => {
        res.status(200).send('duple');
        new Error(err);
    });
});

module.exports = router;