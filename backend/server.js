const express = require('express');
const app = express();
const PORT = 5000;
const friendList = require('./resources/friendJson.json'); 
const chatList = require('./resources/chatJson.json'); 

app.get('/friendList',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(friendList);
});


app.get('/chatList', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(chatList);
});
 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});