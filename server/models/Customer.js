const mongoose = require('mongoose');
module.exports = mongoose.model('Customer', new mongoose.Schema({
  name: String,
  email: String,
  total_spent: Number,
  last_purchase_date: Date,
  visit_count: Number
}));