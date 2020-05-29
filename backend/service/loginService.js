const mongoose = require('mongoose');

const fn = {
    isPossibleLogin(schema, target) {
      return new Promise((resolve, reject) => {
          mongoose.connection.db.collection(schema, function(err, collection) {
              collection.find({"id" : target._id, "password": target._password }).toArray(function(err, data) {
                  if(data.length) {
                    resolve(true);
                  } else {
                    reject(false);
                  }
                  
              })
          });
      });
    }
}

module.exports = fn;