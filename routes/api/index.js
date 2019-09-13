const router = require('express').Router();
const animalsAPI = require('./animalsAPI');

// API routes
router.use('/animals', animalsAPI);

module.exports = router;