const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_code: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  Item: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'master_items'  
});

module.exports = mongoose.model('MasterItem', itemSchema);
