const mongoose = require('mongoose');
const User = require('../model/User');

mongoose.set('useFindAndModify', false);

const fn = {
    getMyInfo(schema, target) {
        return new Promise((resolve, reject) => {
            mongoose.connection.db.collection(schema, function(err, collection) {
                collection.find({"id" : target.id}).toArray(function(err, data) {
                    if(data.length) {
                      resolve(data);
                    } else {
                        resolve(data);
                    }
                    
                })
            });
        });
      },
      getFriendList(schema, target) {
        return new Promise((resolve, reject) => {
            mongoose.connection.db.collection(schema, function(err, collection) {
                collection.find({"id" : target.id}).toArray(function(err, data) {
                    if(data.length) {
                        resolve(data);
                    } else {
                        resolve(data);
                    }
                    
                })
            });
        });
      },
      addFriend(schema, target) {
            return new Promise((resolve, reject) => {
            const friend = {id : target.addFriend._id, nickName : target.addFriend._name, message : target.addFriend._message};
            mongoose.connection.db.collection(schema, function(err, collection) {
                collection.findOneAndUpdate({id : target.id}, {$push : {friendList : JSON.stringify(friend)}});
                resolve(true);
            });
        });
      }
    }


module.exports = fn;