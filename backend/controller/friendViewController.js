const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const friendViewService = require('../service/friendViewService');

router.use(bodyParser.urlencoded({ extended:true }));

//myInfo
router.post('/myInfo', (req, res) => {
    console.log(req.body);
    friendViewService.getMyInfo('users', req.body)
        .then((d) => {
            console.log(d);
            res.status(200).send({
                id: d[0].id,
                name: d[0].nickName,
                message : d[0].message,
            });
        })
        .catch((err) => {
            res.status(500).send(false);
            new Error(err);
        });
});

//friendList
router.post('/friendList', (req, res)=> {
    console.log(req.body);
    friendViewService.getFriendList('users', req.body)
        .then((d) => {
            console.log(d);
            res.status(200).send({
                friendList: d[0].friendList
            });
        })
        .catch((err) => {
            res.status(500).send(false);
            new Error(err);
        });
});

module.exports = router;