const mongoose = require('mongoose');

const fn = {
    checkDuplication(schema, query, target) {
      return new Promise((resolve, reject) => {
          mongoose.connection.db.collection(schema, function(err, collection) {
              collection.find({[query] : target}).toArray(function(err, data) {
                  console.log(data.length);
                if(!data.length) {
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