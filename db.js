// db.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const tser = mongoose.model('tser', userSchema);

module.exports = {
  tser,
};
