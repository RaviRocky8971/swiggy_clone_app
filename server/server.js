const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const { applyTimestamps } = require('./models/master_data');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/masterItems', require('./routes/masterItems'));
app.use('/api/topRestaurants', require('./routes/topRestaurants'));
app.use('/api/getCuisineData', require('./routes/cuisine'));
app.use('/api/getFilterData', require('./routes/filterRestaurant.js'));
app.use('/api/getRestaurantName',require('./routes/getRestaurantName.js'))
app.use('/api/getRestaurantItems',require('./routes/items.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
