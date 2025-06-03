exports.sendCampaignMessage = (user, message) => {
  return Math.random() > 0.1 ? 'SENT' : 'FAILED';
};

