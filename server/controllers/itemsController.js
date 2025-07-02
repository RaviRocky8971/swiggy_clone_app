// controllers/menuController.js
const MenuItem = require('../models/master_items');   // adjust the path if necessary

const getItems = async (req, res) => {
    const { restaurantId, type } = req.query;

    if (!restaurantId || !type) {
        return res.status(400).json({
            error: '`restaurantId` and `type` query parameters are both required'
        });
    }

    try {
        const items = await MenuItem.find({ restaurantId, type });
        const grouped = items.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});                   // initial value – an empty object

        return res.status(200).json(grouped);
    } catch (err) {
        console.error('Error fetching menu items:', err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getItems };
