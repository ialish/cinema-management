const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
	city: String
}, { versionKey: false });

module.exports = mongoose.model('member', memberSchema);
