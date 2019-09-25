const db = require("../../models");
const router = require("express").Router();
const axios = require("axios");
const Op = require("Sequelize").Op;
const path = require("path");
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();

const headers = {
    "Content-Type": "application/json",
  };

const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY;

// get search variables from form
const searchZip = 0;
console.log("zip code: ", searchZip);
const animalType = "";
console.log("animal type: ", animalType);

// json data to post to RescueGroups api to get animal results
const data = {
    "apikey": REACT_APP_APIKEY,
    "objectType":"animals",
    "objectAction":"publicSearch",
    "search":
    {
        "resultStart": "0",
        "resultLimit": "20",
        "resultSort": "animalID",
        "resultOrder": "asc",
        "filters":
        [
            {
                "fieldName": "animalSpecies",
                "operation": "equals",
                "criteria": animalType
            },
            {
                "fieldName": "animalLocation",
                "operation": "equals",
                "criteria": searchZip
            },
            {
                "fieldName": "animalLocationDistance",
                "operation": "radius",
                "criteria": "50"
            },
            {
                "fieldName": "animalNeedsFoster",
                "operation": "equals",
                "criteria": "Yes"
            },
            // {
            //     "fieldName": "animalStatus",
            //     "operation": "equals",
            //     "criteria": "Available to Foster"
            // }
        ],
        "filterProcessing": "1",
        "fields":
        [
            "animalID","animalOrgID","animalActivityLevel","animalAdoptedDate","animalAdoptionFee","animalAgeString","animalAltered","animalAvailableDate","animalBirthdate","animalBirthdateExact","animalBreed","animalCoatLength","animalColor","animalColorID","animalColorDetails","animalCourtesy","animalDeclawed","animalDescription","animalDescriptionPlain","animalDistinguishingMarks","animalEarType","animalEnergyLevel","animalExerciseNeeds","animalEyeColor","animalFence","animalFound","animalFoundDate","animalFoundPostalcode","animalGeneralAge","animalGeneralSizePotential","animalGroomingNeeds","animalHousetrained","animalIndoorOutdoor","animalKillDate","animalKillReason","animalLocation","animalLocationCoordinates","animalLocationDistance","animalLocationCitystate","animalMicrochipped","animalMixedBreed","animalName","animalSpecialneeds","animalSpecialneedsDescription","animalNeedsFoster","animalNewPeople","animalNotHousetrainedReason","animalObedienceTraining","animalOKWithAdults","animalOKWithCats","animalOKWithDogs","animalOKWithKids","animalOwnerExperience","animalPattern","animalPatternID","animalAdoptionPending","animalPrimaryBreed","animalPrimaryBreedID","animalRescueID","animalSearchString","animalSecondaryBreed","animalSecondaryBreedID","animalSex","animalShedding","animalSizeCurrent","animalSizePotential","animalSizeUOM","animalSpecies","animalSpeciesID","animalSponsorable","animalSponsors","animalSponsorshipDetails","animalSponsorshipMinimum","animalStatus","animalStatusID","animalSummary","animalTailType","animalThumbnailUrl","animalUptodate","animalUpdatedDate","animalUrl","animalVocal","animalYardRequired","animalAffectionate","animalApartment","animalCratetrained","animalDrools","animalEagerToPlease","animalEscapes","animalEventempered","animalFetches","animalGentle","animalGoodInCar","animalGoofy","animalHasAllergies","animalHearingImpaired","animalHypoallergenic","animalIndependent","animalIntelligent","animalLap","animalLeashtrained","animalNeedsCompanionAnimal","animalNoCold","animalNoFemaleDogs","animalNoHeat","animalNoLargeDogs","animalNoMaleDogs","animalNoSmallDogs","animalObedient","animalOKForSeniors","animalOKWithFarmAnimals","animalOlderKidsOnly","animalOngoingMedical","animalPlayful","animalPlaysToys","animalPredatory","animalProtective","animalSightImpaired","animalSkittish","animalSpecialDiet","animalSwims","animalTimid","fosterEmail","fosterFirstname","fosterLastname","fosterName","fosterPhoneCell","fosterPhoneHome","fosterSalutation","locationAddress","locationCity","locationCountry","locationUrl","locationName","locationPhone","locationState","locationPostalcode","animalPictures","animalVideos","animalVideoUrls"
        ]
    }
};

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
// routes match /api/animals/search
router.route("/search")
    .post(function(req, res) {
        data.search.filters[0].criteria = req.body.animalType;
        data.search.filters[1].criteria = req.body.searchZip;
        // data.search.filters[3].criteria = "Yes";
        // data.search.filters[4].criteria = "Available";
        axios.post('https://api.rescuegroups.org/http/v2.json', data, {
        headers: headers
        })
        .then(response => {
            // console.log(response.data.data);
            res.json(response.data.data);
        })
        .catch(err => console.log(err));

    });

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
            urlSecureFullsize: req.body.urlSecureFullsize,
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
        }).then(function(dbAnimal) {
        res.json(dbAnimal);
        })
    })
    .put(function(req, res) {
        console.log("updating animal", req.body)
        db.Animal.update(req.body,
            {
                where: {
                animalID: req.body.animalID
                }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    })
    .delete(function(req, res) {
        db.Animal.destroy({
            where: {
                animalID: req.body.animalID
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
                // fosterStatus: "returned",
                [Op.or]: [{fosterStatus: "returned"}, {fosterStatus: "adopted"}]
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
            animalID: req.body.animalID
            }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    })
    .delete(function(req, res) {
        db.Animal.destroy({
            where: {
                animalID: req.body.animalID
            }
        })
        .then(function(dbAnimal) {
            res.json(dbAnimal);
        });
    });

    // routes match /api/animals/:animalID
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