const mongoose = require('mongoose');

const connectDB = () => {
	const uri = 'mongodb://localhost:27017/subscriptions';
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;
