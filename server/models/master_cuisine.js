const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
  collection: 'cuisine' // Explicitly define the collection name
});

module.exports = mongoose.model('Cuisine', cuisineSchema);
