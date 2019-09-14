const router = require('express').Router();
const animalsAPI = require('./animalsAPI');
const fostersAPI = require('./fostersAPI');

// API routes
router.use('/animals', animalsAPI);
router.use('/fosters', fostersAPI);

module.exports = router;