const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/stashedgames', {
    useUnifiedTopology: true,
    useNewUrlParser: true
    

});

module.exports = mongoose.connection;