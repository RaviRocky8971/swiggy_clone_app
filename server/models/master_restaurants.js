const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    city: { type: String, required: true },
    restaurant_type: { type: String, enum: ['HIGH', 'MEDIUM', 'LOW'], required: true },
    cuisine: { type: [String], required: true },
    image: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    deliveryTime: { type: String },
    isActive: { type: Boolean, default: true },
    address: { type: String },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },
    openingHours: {
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
        Sunday: String
    },
    priceRange: { type: String },
    isOpen: { type: Boolean, default: true }
}, {
    timestamps: true,
    collection: "restaurants_new1"
});

// Geospatial index for location
restaurantSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Restaurant', restaurantSchema);
