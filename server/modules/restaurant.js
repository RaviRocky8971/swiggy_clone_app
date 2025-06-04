const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  city_id: {
    type: Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  city: {
    type: String,
    required: true
  },
  cuisine: {
    type: [String],
    required: true
  },
  image: {
    type: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  deliveryTime: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Restaurant', restaurantSchema, 'restaurants');
