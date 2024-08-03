// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Define routes and link to controller functions
router.post('/register', register); // Link to controller method
router.post('/login', login);       // Link to controller method

module.exports = router;
