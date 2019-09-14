const db = require("../../models");
const router = require("express").Router();

// routes match /api/fosters
router.route("/")
    .get(function(req, res) {
        db.Foster.findAll({})
        .then(function(dbFoster) {
            res.json(dbFoster);
        });
    })
    .post(function(req, res) {
        console.log("add Foster: ", req.body);
        db.Foster.create({
            fosterID: parseInt(req.body.fosterID),
            fosterName: req.body.fosterName,
            fosterPassword: req.body.fosterPassword,
            createdAt: new Date()
        })
        .then(function(dbFoster) {
            console.log("dbFoster: ", dbFoster);
            res.json(dbFoster);
        })
    })
    .put(function(req, res) {
        db.Foster.update(req.body,
        {
            where: {
            FosterID: req.params.fosterID
            }
        })
        .then(function(dbFoster) {
            res.json(dbFoster);
        });

    });

module.exports = router;
