const axios = require("axios");

export default {
    //get animals from the API
    getAnimals: (searchZip, animalType) => {

        const headers = {
            "Content-Type": "application/json",
          };
        
        const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY;

        // get search variables from form. Replace hardcoded values when form is built
        searchZip = {searchZip};
        console.log("zip code: ", searchZip);
        animalType = {animalType};
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
                    // {
                    //     "fieldName": "animalNeedsFoster",
                    //     "operation": "equals",
                    //     "criteria": "Yes"
                    // },
                    {
                        "fieldName": "animalStatus",
                        "operation": "equals",
                        "criteria": "Available to Foster"
                    }
                ],
                "filterProcessing": "1",
                "fields":
                [
                    "animalID","animalOrgID","animalActivityLevel","animalAdoptedDate","animalAdoptionFee","animalAgeString","animalAltered","animalAvailableDate","animalBirthdate","animalBirthdateExact","animalBreed","animalCoatLength","animalColor","animalColorID","animalColorDetails","animalCourtesy","animalDeclawed","animalDescription","animalDescriptionPlain","animalDistinguishingMarks","animalEarType","animalEnergyLevel","animalExerciseNeeds","animalEyeColor","animalFence","animalFound","animalFoundDate","animalFoundPostalcode","animalGeneralAge","animalGeneralSizePotential","animalGroomingNeeds","animalHousetrained","animalIndoorOutdoor","animalKillDate","animalKillReason","animalLocation","animalLocationCoordinates","animalLocationDistance","animalLocationCitystate","animalMicrochipped","animalMixedBreed","animalName","animalSpecialneeds","animalSpecialneedsDescription","animalNeedsFoster","animalNewPeople","animalNotHousetrainedReason","animalObedienceTraining","animalOKWithAdults","animalOKWithCats","animalOKWithDogs","animalOKWithKids","animalOwnerExperience","animalPattern","animalPatternID","animalAdoptionPending","animalPrimaryBreed","animalPrimaryBreedID","animalRescueID","animalSearchString","animalSecondaryBreed","animalSecondaryBreedID","animalSex","animalShedding","animalSizeCurrent","animalSizePotential","animalSizeUOM","animalSpecies","animalSpeciesID","animalSponsorable","animalSponsors","animalSponsorshipDetails","animalSponsorshipMinimum","animalStatus","animalStatusID","animalSummary","animalTailType","animalThumbnailUrl","animalUptodate","animalUpdatedDate","animalUrl","animalVocal","animalYardRequired","animalAffectionate","animalApartment","animalCratetrained","animalDrools","animalEagerToPlease","animalEscapes","animalEventempered","animalFetches","animalGentle","animalGoodInCar","animalGoofy","animalHasAllergies","animalHearingImpaired","animalHypoallergenic","animalIndependent","animalIntelligent","animalLap","animalLeashtrained","animalNeedsCompanionAnimal","animalNoCold","animalNoFemaleDogs","animalNoHeat","animalNoLargeDogs","animalNoMaleDogs","animalNoSmallDogs","animalObedient","animalOKForSeniors","animalOKWithFarmAnimals","animalOlderKidsOnly","animalOngoingMedical","animalPlayful","animalPlaysToys","animalPredatory","animalProtective","animalSightImpaired","animalSkittish","animalSpecialDiet","animalSwims","animalTimid","fosterEmail","fosterFirstname","fosterLastname","fosterName","fosterPhoneCell","fosterPhoneHome","fosterSalutation","locationAddress","locationCity","locationCountry","locationUrl","locationName","locationPhone","locationState","locationPostalcode","animalPictures","animalVideos","animalVideoUrls"
                ]
            }
        };

        return axios.post('https://api.rescuegroups.org/http/v2.json', data, {
            headers: headers
            })
            .then(res => {
                console.log(res.data);
                return res.data;
            })
            .catch(err => console.log(err));

    },
    // Get specific animal by ID
    getAnimal: animalID => {
        return axios.get("/api/animals/" + animalID);
    },
    // Save a foster to the database
    saveAnimal: animalData => {
        console.log("data to save: ", animalData);
        return axios.post("/api/animals/", animalData);
    },
    // Get current fosters from database
    getCurrentFosters: () => {
        return axios.get("/api/animals/current/");
    },
    // Get past fosters from database
    getPastFosters: () => {
        return axios.get("/api/animals/past/");
    },
    // Post route to update foster info in database



};
