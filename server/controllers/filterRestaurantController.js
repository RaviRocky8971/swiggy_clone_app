const Restaurant = require('../models/master_restaurants.js');

const getFilterRestaurant = async (req, res) => {
    const { sort, cuisine, rating, type, city, latitude, longitude } = req.query;

    if (!cuisine || !rating || !type || !city || !latitude || !longitude) {
        return res.status(400).json({
            error: "Missing required query parameters: cuisine, rating, type, city, latitude, longitude"
        });
    }

    const cuisineData = cuisine
        .replace(/^"(.*)"$/, '$1')
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0);

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    const parsedRating = parseFloat(rating);

    const filter = {
        city,
        cuisine: { $in: cuisineData },
        food_type: type,
        rating: { $gte: parsedRating },
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                $maxDistance: 10000 // 10km radius
            }
        }
    };

    try {
        console.log("Filter used:", filter);

        const items = await Restaurant.find(filter);

        if (!items.length) {
            return res.status(404).json({ message: "No matching restaurants found" });
        }

        res.status(200).json(items);
    } catch (err) {
        console.error("Error fetching restaurants:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getFilterRestaurant };
