const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, (req, res) => {
    res.json({ message: 'Get user orders - to be implemented' });
});

router.post('/', protect, (req, res) => {
    res.json({ message: 'Create order - to be implemented' });
});

module.exports = router;