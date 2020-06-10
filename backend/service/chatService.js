const mongoose = require('mongoose');
const User = require('../model/User');

mongoose.set('useFindAndModify', false);

const fn = {
      loadChatData(schema, target) {
        //     return new Promise((resolve, reject) => {
        //     mongoose.connection.db.collection(schema, function(err, collection) {
                
        //     });
        // });
      }
    }


module.exports = fn;