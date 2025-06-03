// server/controllers/segmentController.js
const Customer = require('../models/Customer');

// Controller to fetch and segment customers
exports.getSegmentedCustomers = async (req, res) => {
  try {
    // Fetch all customers from the database
    const customers = await Customer.find();

    // Segment customers based on total_spent or visit_count
    const segments = {
      High: [],
      Medium: [],
      Low: []
    };

    // Segmenting logic based on total_spent
    customers.forEach(customer => {
      if (customer.total_spent >= 1000) {
        segments.High.push(customer);
      } else if (customer.total_spent >= 500) {
        segments.Medium.push(customer);
      } else {
        segments.Low.push(customer);
      }
    });

    // Return the segmented data
    res.json({ segments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
