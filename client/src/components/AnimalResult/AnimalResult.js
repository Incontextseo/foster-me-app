import React from "react";
import './AnimalResult.css';

<<<<<<< HEAD

function AnimalResult(props) {
    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, fosterReason, updatedAt} = props;

    return (

        // <article id={animalID}>
        //     <img src={animalThumbnailUrl} alt={animalName} />
        //     <h4>{animalName}</h4>
        //     <p>Age: {animalGeneralAge || "Age unknown"}</p>
        //     <p>Size: {animalGeneralSizePotential || "Size not provided"}</p>
        //     <p>Breed: {animalBreed || "Breed unknown"}</p>
        //     <p>{animalDescriptionPlain}</p>
        // </article>

        <article id={animalID}>
            <div className="row">
                <div className="img-area col-4">
                    <img className="news-img" src={animalThumbnailUrl} alt={animalName}/>
                    <h3>{animalName}</h3>
                    <p>
                    Age: {animalGeneralAge || "Age unknown"}<br/>
                    Size: {animalGeneralSizePotential || "Size not provided"}<br/>
                    Breed: {animalBreed || "Breed unknown"}</p>
                </div>
                <div className="animal-area col-8">
                    <p>Reason for Foster: {fosterReason || "URI"}<br/>
                    Return Date: {updatedAt || "10/31/2019"}<br/>
                    {animalDescriptionPlain}</p>
                </div>
            </div>
=======
function AnimalResult(props) {

    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain} = props;

    return (

        <article id={animalID}>
            <img src={animalThumbnailUrl} alt={animalName} />
            <h4>{animalName}</h4>
            <p>Age: {animalGeneralAge || "Age unknown"}</p>
            <p>Size: {animalGeneralSizePotential || "Size not provided"}</p>
            <p>Breed: {animalBreed || "Breed unknown"}</p>
            <p>{animalDescriptionPlain}</p>
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
        </article>
    )}

export default AnimalResult;