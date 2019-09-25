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
                        <p>Name: {animalName}<br/>
                        Species: {animalSpecies}<br/>
                        Age: {animalGeneralAge}<br/>
                        Foster Reason: {fosterReason}<br/>
                        Animal ID: {animalID}<br/>
                        Gender: {animalSex}<br/>
                        Breed: {animalBreed}</p>
                        <p>Animal Rescue Description: {animalDescriptionPlain}</p>
                        <p>Updated Profile Description: {animalProfile}</p>
                        Is the animal house trained/litter box trained? {animalHouseTrained}<br/>
                        Has the animal interacted with children? {interactWithChildren}<br/>
                        Has the animal interacted with other pets? {interactWithPets}<br/>
                        Other interaction comments: {interactionComments}<br/>
                        {/* // Add an if-then statement to only show this section if fosterStatus is not null */}
                        When you first brought the animal home they: <ul><li>{initialReaction}</li></ul><br/>
                        When greeting or approaching the animal they: <ul><li>{greetingReaction}</li></ul><br/>
                        When petting the animal they: <ul><li>{pettingReaction}</li></ul><br/>
                        When engaging in play the animal: <ul><li>{playReaction}</li></ul><br/>
                        When picked up and held they: 
                            <ul>
                                <li>{holdingReaction}</li>
                            </ul>
                        In your opinion, which home setting would this animal be suited for?
                        <ul>
                            <li>{animalOKWithKids}</li>
                            <li>{animalOKWithAdults}</li>
                            <li>{animalOKForSeniors}</li>
                            <li>{animalOKWithCats}</li>
                            <li>{animalOKWithDogs}</li>
                        </ul>
                    </div>
            </div>
        )
    
}

export default ViewProfile;
