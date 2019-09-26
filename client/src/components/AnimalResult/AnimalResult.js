import React from "react";
import './AnimalResult.css';
import Pawprint from "./pawprint.png";


function AnimalResult(props) {
    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, urlSecureFullsize, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, fosterReason, updatedAt} = props;
    return (
        <article id={animalID}>
          
            <div className="row">
                <div className="img-area col-4">
                <h3>{animalName}</h3>
                    <img className="news-img" src={urlSecureFullsize || animalThumbnailUrl || Pawprint } alt={animalName} />

                </div>
                <div className="animal-area col-8">
            
                    <p><span>Age:</span> {animalGeneralAge || "Age unknown"}</p>
                    <p><span>Size:</span> {animalGeneralSizePotential || "Size not provided"}</p>
                    <p><span>Breed:</span> {animalBreed || "Breed unknown"}</p>
                    <p><span>Reason for Foster:</span> {fosterReason || "URI"}</p>
                    <p><span>Return Date:</span> {updatedAt || "10/31/2019"}</p>
                    <p><span>Bio:</span><br/> {animalDescriptionPlain}</p>
                    {/* <ReadMoreReact
                    min={80}
                    ideal={100}
                    max={200}
                    readMoreText="click here to read more"
                    >{animalDescriptionPlain}</ReadMoreReact> */}
                </div>
            </div>
        </article>
    )}

export default AnimalResult;