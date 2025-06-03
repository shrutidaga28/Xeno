// const mongoose = require('mongoose');

// const CommunicationLogSchema = new mongoose.Schema({
//   user_id: Number,
//   message: String,
//   status: {
//     type: String,
//     enum: ['SENT', 'FAILED'],
//     default: 'SENT',
//   },
//   created_at: {
//     type: Date,
//     default: Date.now,
//   }
// });

// module.exports = mongoose.model('CommunicationLog', CommunicationLogSchema);

const mongoose = require('mongoose');
module.exports = mongoose.model('CommunicationLog', new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  message: String,
  status: { type: String, enum: ['SENT', 'FAILED'] },
  created_at: { type: Date, default: Date.now }
}));

