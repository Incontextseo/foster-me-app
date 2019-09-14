const router = require("express").Router();

// routes match /api/animals
router.route("/")
    .get(function(req, res) {
        db.Animal.findAll({})
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    })
    .post(function(req, res) {
        console.log("add animal: ", req.body);
        db.Animal.create({
            animalID: parseInt(req.body.animalID),
            animalSpecies: req.body.animalSpecies,
            animalSex: req.body.animalSex,
            animalName: req.body.animalName,
            animalGeneralAge: req.body.animalGeneralAge,
            animalGeneralSizePotential: req.body.animalGeneralSizePotential,
            animalBreed: req.body.animalBreed,
            animalDescriptionPlain: req.body.animalDescriptionPlain,
            animalHouseTrained: req.body.animalHouseTrained,
            animalDeclawed: req.body.animalDeclawed,
            animalThumbnailUrl: req.body.animalThumbnailUrl,
            createdAt: new Date()
        })
        .then(function(dbAnimal) {
            console.log("dbAnimal: ", dbAnimal);
            res.json(dbAnimal);
        })
    })
    .put(function(req, res) {
        db.Animal.update(req.body,
        {
            where: {
            animalID: req.params.animalID
            }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });

    });

// routes match /api/animals/current
router.route("/current")
    .get(function(req, res) {
        db.Animal.findAll({
            where: {
                fosterStatus: "current"
            }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    })
    .put(function(req, res) {
        db.Animal.update(req.body,
            {
                where: {
                animalID: req.params.animalID
                }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    });


//routes match /api/animals/past
router.route("/past")
    .get(function(req, res) {
        db.Animal.findAll({
            where: {
                fosterStatus: "returned"
            }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    })
    .put(function(req, res) {
        db.Animal.update(req.body,
        {
            where: {
            animalID: req.params.animalID
            }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    });

    // routes match /api/animal/:animalID
    router.route("/:animalID")
        .get(function(req, res) {
            db.Animal.update(req.body,
                {
                    where: {
                    animalID: req.params.animalID
                    }
            })
            .then(function(dbAnimal) {
                res.json(dbAnimal);
            });
        })
        .put(function(req, res) {
            db.Animal.update(req.body,
            {
                where: {
                    animalID: req.params.animalID
                }
            })
            .then(function(dbAnimal) {
                res.json(dbAnimal);
            });
        })
        .delete(function(req, res) {
            db.Animal.destroy({
                where: {
                    animalID: req.params.animalID
                }
            })
            .then(function(dbAnimal) {
                res.json(dbAnimal);
            });
        });

module.exports = router;
