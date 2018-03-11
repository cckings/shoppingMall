var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('连接成功');
});

module.exports = mongoose;