// models/menu_item.js
const mongoose = require('mongoose');

/* ---------- sub‑schemas ---------- */
const optionSchema = new mongoose.Schema(
  {
    name : { type: String, required: true },
    price: { type: Number, default: 0 },     // extra charge (optional)
  },
  { _id: false }
);

const customizationSchema = new mongoose.Schema(
  {
    name   : { type: String, required: true },   // e.g. “Spice Level”
    options: { type: [optionSchema], default: [] }
  },
  { _id: false }
);

/* ---------- main menu‑item schema ---------- */
const menuItemSchema = new mongoose.Schema(
  {
    /* 🟢 keep these as STRING because they’re stored that way in the DB */
    restaurantId: { type: String, required: true },  // "6824f7b01b886185f9bc927a"
    city_id     : { type: String, required: true },  // "6824f3333713dab9dbe5521d"

    /* basic info */
    name       : { type: String, required: true },
    description: { type: String, default: '' },

    /* classification */
    type      : { type: String, enum: ['Veg', 'Non‑Veg', 'Egg'], required: true },
    type_image: { type: String, default: '' },          // icon url
    category  : { type: String, required: true },       // Starter / Main / Dessert …

    /* pricing & meta */
    price  : { type: Number, required: true, min: 0 },
    rating : { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0 },

    /* assets */
    image: { type: String, default: '' },

    /* flags */
    isBestseller  : { type: Boolean, default: false },
    isAvailable   : { type: Boolean, default: true },
    isCustomisable: { type: Boolean, default: false },
    isVegetarian  : { type: Boolean, default: false },

    /* customisations */
    customizationOptions: { type: [customizationSchema], default: [] },
  },
  {
    timestamps: true,              // adds createdAt & updatedAt
    collection: 'items_new',       // the collection name in MongoDB
  }
);

module.exports = mongoose.model('MenuItem', menuItemSchema);
