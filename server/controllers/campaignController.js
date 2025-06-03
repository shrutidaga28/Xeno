// const CommunicationLog = require('../models/CommunicationLog');
// const { sendCampaignMessage } = require('../services/vendorAPI');

// exports.createCampaign = async (req, res) => {
//   const { audience, message } = req.body;
//   try {
//     for (const user of audience) {
//       const status = sendCampaignMessage(user, message);
//       await CommunicationLog.create({
//         user_id: user.id,
//         message,
//         status,
//       });
//     }
//     res.status(201).json({ message: 'Campaign triggered' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to send campaign' });
//   }
// };

// exports.getCampaigns = async (req, res) => {
//   try {
//     const campaigns = await CommunicationLog.find().sort({ created_at: -1 });
//     res.status(200).json(campaigns);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching campaigns' });
//   }
// };

const CommunicationLog = require('../models/CommunicationLog');
const { sendCampaignMessage } = require('../services/vendorAPI');
exports.createCampaign = async (req, res) => {
  const { message, audience } = req.body;
  try {
    const logs = audience.map(user => ({
      user_id: user.id,
      message,
      status: sendCampaignMessage(user, message)
    }));
    await CommunicationLog.insertMany(logs);
    res.json({ message: 'Campaign triggered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await CommunicationLog.find().sort({ created_at: -1 });
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


