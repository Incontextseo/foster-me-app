import React from "react";
import "./UpdateForm.css";

function UpdateForm(props) {

    const { animalID, animalName, animalSpecies, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, handleAnimalClick, buttonText} = props;

    return (
        <div className="col m12">
            <form>
                <h3>Foster info</h3>

                    <div className="col s12 m6">
                        <p>Name: {animalName}</p>
                        <p>Species: {animalSpecies}</p>
                        <p>Age: {animalGeneralAge}</p>
                        <div>
                            Foster Reason:
                            <div className="input-field inline">
                                <input id="fosterReason" type="text" />
                                <label htmlFor="fosterReason">Foster reason</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <p>Animal ID: {animalID}</p>
                        <p>Gender: {animalSex}</p>
                        <p>Breed: {animalBreed}</p>
                    </div>

                <div className="col m12">
                    <h3>Update details about your foster</h3>
                    <p>Is the animal house trained/litter box trained? 
                        <label>
                            <input name="animalHouseTrained" type="radio" value="Yes" />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input name="animalHouseTrained" type="radio" value="No" />
                            <span>No</span>
                        </label>
                    </p>
                    <p>Has the animal interacted with children? 
                        <label>
                            <input name="interactWithChildren" type="radio" value="Yes" />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input name="interactWithChildren" type="radio" value="No" />
                            <span>No</span>
                        </label>
                    </p>
                    <p>Has the animal interacted with other pets? 
                        <label>
                            <input name="interactWithPets" type="radio" value="Yes" />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input name="interactWithPets" type="radio" value="No" />
                            <span>No</span>
                        </label>
                    </p>
                    <p>Other interaction comments:</p>
                    <div className="input-field col s12">
                        <input id="interactionComments" type="text" />
                        <label htmlFor="interactionComments">Comments</label>
                    </div>
                    <p><strong>Notice!</strong> Please fill out the below sections after the animal has been in the home for at least 3 days.</p>
                    <p>When you first brought the animal home he/she:</p>
                    <p>
                        <label htmlFor="initialReaction">
                            <input type="checkbox" name="initialReaction" value="Explored the environment with a tall body posture." />
                            <span>Explored the environment with a tall body posture.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="initialReaction">
                            <input type="checkbox" name="initialReaction" value="Explored the environment with a crouched body posture." />
                            <span>Explored the environment with a crouched body posture.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="initialReaction">
                            <input type="checkbox" name="initialReaction" value="Initially found a place to hide but came out later to explore." />
                            <span>Initially found a place to hide but came out later to explore.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="initialReaction">
                            <input type="checkbox" name="initialReaction" value="Quickly found a place to hide and remained there." />
                            <span>Quickly found a place to hide and remained there.</span>
                        </label>
                    </p>
                    <p>When greeting or approaching the animal he/she:</p>
                    <p>
                        <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" value="Solicits attention by rubbing etc." />
                            <span>Solicits attention by rubbing etc.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" value="Does not approach." />
                            <span>Does not approach.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" value="Retreats or attempts to hide." />
                            <span>Retreats or attempts to hide.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" value="Does not approach but meows, wags tail, or blinks." />
                            <span>Does not approach but meows, wags tail, or blinks.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" value="Charges towards you." />
                            <span>Charges towards you.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" value="Hisses or growls." />
                            <span>Hisses or growls.</span>
                        </label>
                    </p>
                    <p>When petting the animal he/she (please mark all that apply):</p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Rubs against legs or hand." />
                            <span>Rubs against legs or hand.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Sniffs or head-butts your hand." />
                            <span>Sniffs or head-butts your hand.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Rolls on back or rolls over." />
                            <span>Rolls on back or rolls over.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Avoids petting or is tense when petted." />
                            <span>Avoids petting or is tense when petted.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Swat or attempts to swat hand." />
                            <span>Swat or attempts to swat hand.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Meows, purrs, or barks." />
                            <span>Meows, purrs, or barks.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Shows initial fear but then relaxes." />
                            <span>Shows initial fear but then relaxes.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Hisses or growls." />
                            <span>Hisses or growls.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pettingReaction">
                            <input type="checkbox" name="pettingReaction" value="Bites or attempts to bite hand." />
                            <span>Bites or attempts to bite hand.</span>
                        </label>
                    </p>
                    <p>When engaging in play the animal (please mark all that apply):</p>
                    <p>
                        <label htmlFor="playReaction">
                            <input type="checkbox" name="playReaction" value="Eagerly chases toy and engages in play." />
                            <span>Eagerly chases toy and engages in play.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="playReaction">
                            <input type="checkbox" name="playReaction" value="Ignores the toy and avoids contact with you." />
                            <span>Ignores the toy and avoids contact with you.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="playReaction">
                            <input type="checkbox" name="playReaction" value="Ignores toys and attends to something else." />
                            <span>Ignores toys and attends to something else.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="playReaction">
                            <input type="checkbox" name="playReaction" value="Watches the toy intently but does not engage in play." />
                            <span>Watches the toy intently but does not engage in play.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="playReaction">
                            <input type="checkbox" name="playReaction" value="Ignores toys but comes to you for petting/attention." />
                            <span>Ignores toys but comes to you for petting/attention.</span>
                        </label>
                    </p>
                    <p>When picked up and held he/she (please mark all that apply):</p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Meows, purrs, or licks when held." />
                            <span>Meows, purrs, or licks when held.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Accepts the hold but is a little tense." />
                            <span>Accepts the hold but is a little tense.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Struggles to escape." />
                            <span>Struggles to escape.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Struggles to escape." />
                            <span>Struggles to escape.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Extends a paw to your neck/shoulder in a kind manner." />
                            <span>Extends a paw to your neck/shoulder in a kind manner.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Stiffens, very uncomfortable when held." />
                            <span>Stiffens, very uncomfortable when held.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Hisses or growls." />
                            <span>Hisses or growls.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="holdingReaction">
                            <input type="checkbox" name="holdingReaction" value="Bites or attempts to bite." />
                            <span>Bites or attempts to bite.</span>
                        </label>
                    </p>
                    <p>In your opinion, which home setting would this animal be suited for? (Check all that apply)</p>
                    <p>
                        <label htmlFor="animalOKWithKids">
                            <input type="checkbox" name="animalOKWithKids" value="Yes" />
                            <span>A family with children.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="animalOKWithAdults">
                            <input type="checkbox" name="animalOKWithAdults" value="Yes" />
                            <span>Adults only.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="animalOKForSeniors">
                            <input type="checkbox" name="animalOKForSeniors" value="Yes" />
                            <span>Seniors.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="animalOKWithCats">
                            <input type="checkbox" name="animalOKWithCats" value="Yes" />
                            <span>A home with other cats.</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="animalOKWithDogs">
                            <input type="checkbox" name="animalOKWithDogs" value="Yes" />
                            <span>A home with other dogs.</span>
                        </label>
                    </p>
                    <p>Update animal description:</p>
                    <div className="input-field col s12">
                        <input id="animalDescriptionPlain" type="text" />
                        <label htmlFor="animalDescriptionPlain">Help me get adopted!</label>
                    </div>
                    <p>Foster status:</p>
                    <div className="input-field col s12">
                        <select id="fosterStatus">
                            <option value="" disabled selected>Select foster status</option>
                            <option value="current">Current</option>
                            <option value="returned">Returned</option>
                            <option value="adopted">Adopted</option>
                        </select>
                    </div>
                </div>
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm;