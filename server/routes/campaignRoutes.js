// const express = require('express');
// const router = express.Router();
// const { createCampaign, getCampaigns } = require('../controllers/campaignController');

// router.post('/campaigns', createCampaign);
// router.get('/campaigns', getCampaigns);

// module.exports = router;

const express = require('express');
const { createCampaign, getCampaigns } = require('../controllers/campaignController');
const router = express.Router();
router.post('/campaigns', createCampaign);
router.get('/campaigns', getCampaigns);
module.exports = router;
