const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const searchFriendService = require('../service/searchFriendService');

router.use(bodyParser.urlencoded({ extended:true }));

router.post('/searchFriend', (req, res) => {
    searchFriendService.searchFriend('users', req.body.id)
    .then((d) => {
        res.status(200).send(d);
    }) 
    .catch((err) => {
        res.status(500).send(new Error(err));
    });
});

module.exports = router;