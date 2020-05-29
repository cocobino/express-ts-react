const mongoose = require('mongoose');

const fn = {
    searchFriend(schema, target) {
      return new Promise((resolve, reject) => {
          mongoose.connection.db.collection(schema, function(err, collection) {
              collection.find({ "id" : target }).toArray(function(err, data) {
                    resolve(data);
              });
          });
      });
    }
}

module.exports = fn;