const axios = require("axios");

export default {

    // Get animals from RescueGroups.org api
    getAnimals: (searchZip, animalType) => {
        console.log("search zip ", searchZip);
        console.log("animal type: ", animalType);
        return axios.post("/api/animals/search", {searchZip, animalType});
    },
    // Get all animals
    getDbAnimals: () => {
        return axios.get("/api/animals/");
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
    updateAnimal: animalData => {
        console.log("data to update: ", animalData);
        return axios.put("/api/animals/current/", animalData)
    },
    // Post route to update foster info in database and set fosterStatus to Return
    returnAnimal: animalData => {
        console.log("data to update: ", animalData);
        return axios.put("/api/animals/current/", animalData)
    },
    
    // Get list foster families from database
    getFosters: () => {
        return axios.get("/api/fosters/");
    },
    deleteAnimal: animalID => {
        return axios.delete("/api/animals/" + animalID);
    }

};
