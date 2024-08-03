const express = require('express');
const router = express.Router();

// Placeholder for task routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all tasks route' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create task route' });
});

module.exports = router;