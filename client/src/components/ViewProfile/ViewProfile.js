import React from "react";
import "./ViewProfile.css";

function ViewProfile(props) {
    const { animalID, animalName, animalSpecies, animalGeneralAge, animalSex, animalBreed, animalDescriptionPlain, fosterReason,
        animalHouseTrained,
        interactWithChildren,
        interactWithPets,
        interactionComments,
        initialReaction,
        greetingReaction,
        pettingReaction,
        playReaction,
        holdingReaction,
        animalOKWithKids,
        animalOKWithAdults,
        animalOKForSeniors,
        animalOKWithCats,
        animalOKWithDogs,
        animalProfile } = props;

        return (
            <div className="col-md-12">
                    <h3>Foster info</h3>
                    <div className="col-md-12">
                        <p>Name: {animalName || "None provided"}<br/>
                        Species: {animalSpecies || "Unknown"}<br/>
                        Age: {animalGeneralAge || "Unknown"}<br/>
                        Foster Reason: {fosterReason || "Unknown"}<br/>
                        Animal ID: {animalID || "Unknown"}<br/>
                        Gender: {animalSex || "Unknown"}<br/>
                        Breed: {animalBreed || "Unknown"}</p>
                        <p>Animal Rescue Description: {animalDescriptionPlain || "None provided"}</p>
                        <hr/>
                        Is the animal house trained/litter box trained? {animalHouseTrained || "Unknown"}<br/>
                        Has the animal interacted with children? {interactWithChildren || "Unknown"}<br/>
                        Has the animal interacted with other pets? {interactWithPets || "Unknown"}<br/>
                        Other interaction comments: {interactionComments || "Unknown"}<br/>
                        {/* // Add an if-then statement to only show this section if fosterStatus is not null */}
                        <hr/>
                        <p>Updated Profile Description: {animalProfile || "Unknown"}</p>
                        When you first brought the animal home they: 
                        <ul>
                            <li>{initialReaction || "Unknown"}</li>
                        </ul>
                        When greeting or approaching the animal they: 
                        <ul>
                            <li>{greetingReaction || "Unknown"}</li>
                        </ul>
                        When petting the animal they: 
                            <ul>
                                <li>{pettingReaction || "Unknown"}</li>
                            </ul>
                        When engaging in play the animal: 
                            <ul>
                                <li>{playReaction || "Unknown"}</li>
                            </ul>
                        When picked up and held they: 
                            <ul>
                                <li>{holdingReaction || "Unknown"}</li>
                            </ul>
                        In your opinion, which home setting would this animal be suited for:
                        <ul>
                            <li>A family with children? {animalOKWithKids || "Unknown"}</li>
                            <li>Adults only? {animalOKWithAdults || "Unknown"}</li>
                            <li>Seniors? {animalOKForSeniors || "Unknown"}</li>
                            <li>A home with other cats? {animalOKWithCats || "Unknown"}</li>
                            <li>A home with other dogs? {animalOKWithDogs || "Unknown"}</li>
                        </ul>
                    </div>
            </div>
        )
    
}

export default ViewProfile;