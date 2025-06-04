const mongoose = require('mongoose');
const cuisineSchema = new mongoose.Schema({
    code : {
        type : 'string',
        required: true,
        unique: true
    },
    name : {
        type : 'string',
        required: true,
        unique: true
    },

})

module.exports = mongoose.model('Cuisine', cuisineSchema, 'cuisine');
