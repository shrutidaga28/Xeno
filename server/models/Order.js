const mongoose = require('mongoose');
module.exports = mongoose.model('Order', new mongoose.Schema({
  customer_id: mongoose.Schema.Types.ObjectId,
  amount: Number,
  order_date: Date
}));