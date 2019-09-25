const db = require("../../models");
const router = require("express").Router();

// routes match /api/animals
router.route("/signup")
.post(function(req, res) {
    console.log("test")
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        console.log("create successful")
        res.json({redirect: true})
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  module.exports = router;