const Restaurant = require('../models/master_restaurants.js');

const getMasterItemsName = async (req, res) => {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({
            error: "Missing required query parameters: Id"
        });
    }
    try {
        const items = await Restaurant.findById(id);
        res.status(200).json(items);
    } catch (err) {
        console.error("Error fetching master items:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getMasterItemsName };
