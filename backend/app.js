const express = require('express');
const app = express();
const db = require('./db/db');
const cors = require('cors');
const bodyParser = require('body-parser');

//cors
app.use(cors());
//body pars json
app.use(bodyParser.json());

const UserController = require('./controller/userController');
app.post('/joinUser', UserController);

module.exports = app;