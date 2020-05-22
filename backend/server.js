const express = require('express');
// cors 모듈
const cors = require('cors');
const bodyParser = require('body-parser');

const friendList = require('./resources/friendJson.json'); 
const chatList = require('./resources/chatJson.json'); 

//Express
const app = express();
const PORT = 5000;


// 모든 도메인의 통신을 허용합니다.
const corsOpt = function(req, callbank) {
  callbank(null, {origin: true});
};
 
// 모든 options 메서드로의 사전 전달 접근을 허용합니다.
app.options('*', cors(corsOpt));

//body-parse
app.use(bodyParser.json());

//친구목록
app.get('/friendList', cors(corsOpt), (req,res)=>{
    res.json(friendList);
});


//채팅리스트
app.get('/chatList', cors(corsOpt), (req, res) => {
    res.json(chatList);
});

//로그인
app.post('/loginRequest', cors(corsOpt), (req, res) => {
    if(typeof req.body !== 'undefined') {
        res.json({'loginYn' : 'true'});
    } else {
        res.json({'loginYn' : 'false'});
    }
});

//회원가입
app.post('/joinUser', cors(corsOpt), (req, res) => {
    console.log(req.body);
    
    if(typeof req.body !== 'undefined') {
        res.json({'loginYn' : 'true'});
    } else {
        res.json({'loginYn' : 'false'});
    }
});
 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});