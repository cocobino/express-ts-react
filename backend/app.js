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
const LoginController = require('./controller/loginController');
const SearchFriendController = require('./controller/searchFriendController');
const FriendViewController = require('./controller/friendViewController');
const ChatViewController = require('./controller/chatViewController');

app.post('/joinUser', UserController);
app.post('/loginUser', LoginController);
app.post('/searchFriend', SearchFriendController);
app.post('/myInfo', FriendViewController);
app.post('/friendList', FriendViewController);
app.post('/addFriend', FriendViewController);
app.post('/chatData', ChatViewController);
module.exports = app;