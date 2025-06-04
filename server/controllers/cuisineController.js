const Cuisine = require('../models/master_cuisine');

const getCuisineData = async (req, res) => {
    try {
        const items = await Cuisine.find(); // ✅ await the query
        res.status(200).json(items);
    } catch (err) {
        console.error("Error fetching cuisine data:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getCuisineData };

// export default getCuisineData
