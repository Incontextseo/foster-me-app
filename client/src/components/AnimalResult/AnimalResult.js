import React from "react";
import './AnimalResult.css';
import Pawprint from "./pawprint.png";


function AnimalResult(props) {
    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, urlSecureFullsize, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, fosterReason, updatedAt} = props;
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
                    <img className="news-img" src={urlSecureFullsize || animalThumbnailUrl || Pawprint } alt={animalName} />
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
        </article>
    )}

export default AnimalResult;