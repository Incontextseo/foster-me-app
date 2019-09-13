import React from "react";

function Animals(props) {

    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, onClick, buttonText} = props;

    return (

        <article id={animalID}>
            <img src={animalThumbnailUrl || "http://g.petango.com/photos/101/c83dee18-ae6d-4499-9fb5-8e8a2e494908_TN1.jpg"} alt={animalName} />
            <h2>{animalName || "Name unknown"}</h2>
            <p>Age: {animalGeneralAge || "Age unknown"}</p>
            <p>Size: {animalGeneralSizePotential || "Size not provided"}</p>
            <p>Breed: {animalBreed || "Breed unknown"}</p>
            <p>Description: {animalDescriptionPlain || "No description available"}</p>
            <button 
                className="btn waves-effect waves-light" 
                onClick={onClick}
                data-id={animalID}
            >{buttonText}</button>

        </article>
    )}

export default Animals;