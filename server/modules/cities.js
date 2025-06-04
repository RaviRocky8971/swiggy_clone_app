const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
  city_code: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('City', citySchema, 'cities');
