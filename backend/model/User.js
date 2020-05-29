const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        index:true,
        required : true
    },
    password:String,
    nickName:String,
    friendList : []
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');