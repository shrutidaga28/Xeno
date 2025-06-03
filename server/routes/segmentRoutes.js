// server/routes/segmentRoutes.js
const express = require('express');
const { getSegmentedCustomers } = require('../controllers/segmentController');
const router = express.Router();

// Route to get segmented customers
router.get('/segment', getSegmentedCustomers);

module.exports = router;
