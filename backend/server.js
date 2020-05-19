const express = require('express');
const app = express();
const PORT = 5000;
const friendList = require('./resources/friendJson.json'); 

app.get('/friendList',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(friendList);
});
 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});