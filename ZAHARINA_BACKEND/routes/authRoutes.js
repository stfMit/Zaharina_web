const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// We'll add controller functions later
router.post('/register', (req, res) => {
    res.json({ message: 'Register route - to be implemented' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'Login route - to be implemented' });
});

router.get('/me', protect, (req, res) => {
    res.json({ message: 'Profile route - to be implemented' });
});

module.exports = router;