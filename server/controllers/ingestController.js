const Customer = require('../models/Customer');
const Order = require('../models/Order');
exports.ingestCustomers = async (req, res) => {
  try {
    await Customer.insertMany(req.body);
    res.json({ message: 'Customers ingested' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.ingestOrders = async (req, res) => {
  try {
    await Order.insertMany(req.body);
    res.json({ message: 'Orders ingested' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};