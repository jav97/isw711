const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  address: { type: String }
});

module.exports = mongoose.model('tasks', task);