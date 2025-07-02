const express = require('express');
const router = express.Router();
const {getItems} = require('../controllers/itemsController.js');
router.get('/', getItems);

module.exports = router;