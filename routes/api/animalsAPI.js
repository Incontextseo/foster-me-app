const db = require("../../models");
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

// module.exports = function(app) {

//     // GET route for all fosters
//     app.get("/animals", function(req, res) {
//         db.Animal.findAll({})
//         .then(function(dbAnimal) {
//             res.json(dbAnimal);
//         });
//     });

//     // GET route for current fosters
//     app.get("/animals/current", function(req, res) {
//         db.Animal.findAll({
//             where: {
//                 status: current
//             }
//         })
//         .then(function(dbAnimal) {
//             console.log(dbAnimal);
//             res.json(dbAnimal);
//         });
//     });
    
//     // GET route for past fosters
//     app.get("/animals/past", function(req, res) {
//         db.Animal.findAll({
//             where: {
//                 fosterStatus: returned
//             }
//         })
//         .then(function(dbAnimal) {
//             res.json(dbAnimal);
//         });
//     });

//     // POST route for saving a new foster to database
//     app.post("/animals", function(req, res) {
//         console.log("add animal: ", req.body);
//         db.Animal.create({
//             animalID: parseInt(req.body.animalID),
//             animalSpecies: req.body.animalSpecies,
//             animalSex: req.body.animalSex,
//             animalName: req.body.animalName,
//             animalGeneralAge: req.body.animalGeneralAge,
//             animalGeneralSizePotential: req.body.animalGeneralSizePotential,
//             animalBreed: req.body.animalBreed,
//             animalDescriptionPlain: req.body.animalDescriptionPlain,
//             animalHouseTrained: req.body.animalHouseTrained,
//             animalDeclawed: req.body.animalDeclawed,
//             animalThumbnailUrl: req.body.animalThumbnailUrl,
//             createdAt: new Date()
//         })
//         .then(function(dbAnimal) {
//             console.log("dbAnimal: ", dbAnimal);
//             res.json(dbAnimal);
//         });
//     });

//     // DELETE route to remove animal from database
//     app.delete("/api/animals/:animalID", function(req, res) {
//         db.Animal.destroy({
//           where: {
//             animalID: req.params.animalID
//           }
//         })
//           .then(function(dbAnimal) {
//             res.json(dbAnimal);
//           });
//       });

//       // PUT route for updating fost info
//     app.put("/api/animals", function(req, res) {
//         db.Animal.update(req.body,
//         {
//             where: {
//             animalID: req.params.animalID
//             }
//         })
//         .then(function(dbAnimal) {
//             res.json(dbAnimal);
//         });
//     });

// };