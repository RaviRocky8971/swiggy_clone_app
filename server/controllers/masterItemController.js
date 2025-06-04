const MasterItem = require('../models/master_data');

const getMasterItems = async (req, res) => {
  try {
    const items = await MasterItem.find();
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching master items:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getMasterItems };
