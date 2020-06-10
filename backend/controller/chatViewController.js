const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));

//myInfo
router.post('/chatData', (req, res) => {
    console.log(req.body)
    res.status(200).send(true);
});

module.exports = router;