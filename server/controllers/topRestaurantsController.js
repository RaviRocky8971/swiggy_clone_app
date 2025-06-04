const Restaurant = require('../models/master_restaurants');

const topRestaurants = async (req, res) => {
    const { city, latitude, longitude } = req.query;

    if (!city || !latitude || !longitude) {
        return res.status(400).json({
            error: "Missing required query parameters: city, latitude, longitude"
        });
    }

    try {
        const restaurants = await Restaurant.find({
            city: city,
            restaurant_type: "HIGH",
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(longitude), parseFloat(latitude)]
                    },
                    // $maxDistance: 5000 // optional
                }
            }
        });

        res.status(200).json(restaurants);
    } catch (err) {
        console.error("Error fetching top restaurants:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { topRestaurants };
