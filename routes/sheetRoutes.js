  
const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { readSheet } = require('../controllers/sheetController');
const router = express.Router();

router.post('/read', protect, readSheet); // Example endpoint to read from Google Sheets

module.exports = router;
