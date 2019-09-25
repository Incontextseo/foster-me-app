const router = require('express').Router();
const animalsAPI = require('./animalsAPI');
const fostersAPI = require('./fostersAPI');
<<<<<<< HEAD
=======
const passportAPI = require('./passportAPI');
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b

// API routes
router.use('/animals', animalsAPI);
router.use('/fosters', fostersAPI);
<<<<<<< HEAD
=======
router.use('/auth', passportAPI);
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b

module.exports = router;