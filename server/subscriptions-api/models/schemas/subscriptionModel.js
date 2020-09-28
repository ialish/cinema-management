const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  memberId: mongoose.ObjectId,
  movies: [{ movieId: mongoose.ObjectId ,date: Date }]
}, { versionKey: false });

module.exports = mongoose.model('subscription', subscriptionSchema);
