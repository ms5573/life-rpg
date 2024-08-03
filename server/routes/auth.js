const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Placeholder for authentication routes
router.post('/register', (req, res) => {
  res.json({ message: 'Register route' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login route' });
});

module.exports = router;