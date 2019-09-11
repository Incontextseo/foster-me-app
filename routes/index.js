const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 17ae6100e832c4d8fc07ccc33ca3736c2d1cd7fe
