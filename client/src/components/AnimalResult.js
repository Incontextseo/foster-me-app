import React from "react";

function AnimalResult(props) {

    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, onClick, buttonText} = props;

    return (

        <article id={animalID}>
            <img src={animalThumbnailUrl} alt={animalName} />
            <h4>{animalName}</h4>
            <p>Age: {animalGeneralAge || "Age unknown"}</p>
            <p>Size: {animalGeneralSizePotential || "Size not provided"}</p>
            <p>Breed: {animalBreed || "Breed unknown"}</p>
            <p>{animalDescriptionPlain}</p>
            <button 
                className="btn waves-effect waves-light" 
                onClick={onClick}
                data-id={animalID}
            >{buttonText}</button>

        </article>
    )}

export default AnimalResult;