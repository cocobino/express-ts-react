const mongoose = require('mongoose');

var uri = "mongodb://ldk0225:ldk0225@prccluster-shard-00-00-1kgh5.mongodb.net:27017,prccluster-shard-00-01-1kgh5.mongodb.net:27017,prccluster-shard-00-02-1kgh5.mongodb.net:27017/test?ssl=true&replicaSet=prcCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri);