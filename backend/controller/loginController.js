const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const loginService = require('../service/loginService');

router.use(bodyParser.urlencoded({ extended:true }));

//login
router.post('/loginUser', (req, res) => {
    loginService.isPossibleLogin('users', req.body)
    .then((d) => {
        res.status(200).send(true);
    })
    .catch((err) => {
        res.status(500).send(false);
        console.log(err)
        new Error(err);
    });
});

module.exports = router;