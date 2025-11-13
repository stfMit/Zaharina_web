const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all products - to be implemented' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'Get single product - to be implemented' });
});

module.exports = router;