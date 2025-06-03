// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const connectDB = require('./utils/db');
// const campaignRoutes = require('./routes/campaignRoutes');

// const app = express();
// connectDB(); // connect MongoDB

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api', campaignRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./utils/db');
const ingestRoutes = require('./routes/ingestRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const segmentRoutes = require('./routes/segmentRoutes');

const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', ingestRoutes);
app.use('/api', campaignRoutes);
app.use('/api', segmentRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
