const mongoose = require('mongoose');

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
      }
    }


module.exports = fn;