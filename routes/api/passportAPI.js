const db = require("../../models");
const router = require("express").Router();
<<<<<<< HEAD
const passport = require("../../config/passport");
=======
>>>>>>> 2a36e05a44986093c20e48da8c34220d238bf9f3

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

<<<<<<< HEAD
  router.route("/login")
  .post(function(req, res, next) {
    console.log("logging in", req.body)
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json(true);
        });
      })(req, res, next);
  });

=======
>>>>>>> 2a36e05a44986093c20e48da8c34220d238bf9f3
  module.exports = router;