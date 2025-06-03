const express = require('express');
const { ingestCustomers, getCustomers, ingestOrders } = require('../controllers/ingestController');
const router = express.Router();
router.post('/customers', ingestCustomers);
router.get('/customers', getCustomers);
router.post('/orders', ingestOrders);
module.exports = router;