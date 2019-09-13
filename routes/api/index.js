const router = require('express').Router();
const api = require('./API');

// API routes
router.use('/api', api);

module.exports = router;