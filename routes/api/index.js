const router = require('express').Router();
const animalsAPI = require('./animalsAPI');
const fostersAPI = require('./fostersAPI');
const passportAPI = require('./passportAPI');

// API routes
router.use('/animals', animalsAPI);
router.use('/fosters', fostersAPI);
router.use('/auth', passportAPI);

module.exports = router;