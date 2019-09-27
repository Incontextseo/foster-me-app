const db = require("../../models");
const router = require("express").Router();

// create some helper functions to work on the database
const createUser = async ({ username, password }) => { 
    return await db.User.create({ username, password });
  };
  const getAllUsers = async () => {
    return await User.findAll();
  };
  const getUser = async obj => {
    return await User.findOne({
    where: obj,
  });
  };

  // get all users
router.route("/users")
.get(function(req, res) {
    getAllUsers()
    .then(user => res.json(user)); 
  });
// register route
router.route("/register")
  .post(function(req, res, next) {
    const { username, password } = req.body;
    createUser({ username, password })
    .then(user =>
      res.json({ user, msg: "account created successfully" })
    );
  });