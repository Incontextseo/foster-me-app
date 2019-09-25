const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

<<<<<<< HEAD
=======

>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;