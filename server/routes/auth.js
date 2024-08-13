// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/authController');

// Define routes and link to controller functions
router.post('/verify-token', verifyToken);

module.exports = router;