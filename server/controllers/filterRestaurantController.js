const Restaurant = require('../models/master_restaurants.js');

const getFilterRestaurant = async (req, res) => {
    const { sort, cuisine, rating, type, city, latitude, longitude, price, pricelow } = req.query;

    // res.json(
    //     sort
    // );
    // res.json(
    //     cuisine
    // );
    // res.json(
    //     rating
    // );
    // res.json(
    //     type
    // );
    // res.json(
    //     city
    // );
    // res.json(
    //     latitude
    // );
    // res.json(
    //     longitude
    // );
    
    // return false;

    if (!city || !latitude || !longitude) {
        return res.status(400).json({
            error: "Missing required query parameters: city, latitude, longitude"
        });
    }

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    // Build filter object with required parameters
    const filter = {
        city,
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

    // Add optional filters if they exist
    if (cuisine) {
        const cuisineData = cuisine.replace(/^"(.*)"$/, '$1').split(',').map(item => item.trim()).filter(item => item.length > 0);
        filter.cuisine = { $in: cuisineData };
    }

    if (type) {
        filter.food_type = type;
    }

    if (rating) {
        const parsedRating = parseFloat(rating);
        filter.rating = { $gte: parsedRating };
    }

    // Handle price range filtering
    if (price) {
        const priceData = price.split('-');
        const priceStart = parseInt(priceData[0]);
        const priceEnd = parseInt(priceData[1]);
        
        // Check if restaurant's price range overlaps with the requested range
        filter.$or = [
            // Case 1: Restaurant's range is completely within requested range
            {
                $and: [
                    { priceRange: { $regex: /^\d+-\d+$/ } },
                    {
                        $expr: {
                            $and: [
                                { $gte: [{ $toInt: { $arrayElemAt: [{ $split: ["$priceRange", "-"] }, 0] } }, priceStart] },
                                { $lte: [{ $toInt: { $arrayElemAt: [{ $split: ["$priceRange", "-"] }, 1] } }, priceEnd] }
                            ]
                        }
                    }
                ]
            },
            // Case 2: Restaurant's range partially overlaps with requested range
            {
                $and: [
                    { priceRange: { $regex: /^\d+-\d+$/ } },
                    {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        { $lte: [{ $toInt: { $arrayElemAt: [{ $split: ["$priceRange", "-"] }, 0] } }, priceEnd] },
                                        { $gte: [{ $toInt: { $arrayElemAt: [{ $split: ["$priceRange", "-"] }, 1] } }, priceStart] }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        ];
    }

    // Handle low price filtering
    if (pricelow) {
        const maxPrice = parseInt(pricelow);
        filter.$or = [
            // Check if restaurant's price range is below the specified price
            {
                $and: [
                    { priceRange: { $regex: /^\d+-\d+$/ } },
                    {
                        $expr: {
                            $lte: [{ $toInt: { $arrayElemAt: [{ $split: ["$priceRange", "-"] }, 1] } }, maxPrice]
                        }
                    }
                ]
            }
        ];
    }

    try {
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
