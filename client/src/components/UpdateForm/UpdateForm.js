import React from "react";
import "./UpdateForm.css";

function UpdateForm(props) {

    const { 
        animalID, 
        animalName, 
        animalSpecies, 
        animalGeneralAge, 
        animalSex, 
        animalBreed, 
        animalDescriptionPlain, 
        fosterReason,
        animalHouseTrained,
        interactWithChildren,
        interactWithPets,
        interactionComments,
        initialReaction1,
        initialReaction2,
        initialReaction3,
        initialReaction4,
        greetingReaction1,
        greetingReaction2,
        greetingReaction3,
        greetingReaction4,
        greetingReaction5,
        greetingReaction6,
        greetingReaction7,
        // callingReaction,
        pettingReaction1,
        pettingReaction2,
        pettingReaction3,
        pettingReaction4,
        pettingReaction5,
        pettingReaction6,
        pettingReaction7,
        pettingReaction8,
        pettingReaction9,
        pettingReaction10,
        playReaction1,
        playReaction2,
        playReaction3,
        playReaction4,
        playReaction5,
        holdingReaction1,
        holdingReaction2,
        holdingReaction3,
        holdingReaction4,
        holdingReaction5,
        holdingReaction6,
        holdingReaction7,
        holdingReaction8,
        animalOKWithKids,
        animalOKWithAdults,
        animalOKForSeniors,
        animalOKWithCats,
        animalOKWithDogs,
        animalProfile,
        handleChange} = props;

    return (
        <div className="container">
            <form>
                <h3>Foster info</h3>
                <div className="row">
                    <div className="column col-6">
                        <p>Name: {animalName}</p>
                        <p>Species: {animalSpecies}</p>
                        <p>Age: {animalGeneralAge}</p>
                    </div>
                    <div className="column col-6">
                        <p>Animal ID: {animalID}</p>
                        <p>Gender: {animalSex}</p>
                        <p>Breed: {animalBreed}</p>
                    </div>
                </div>
                <div className="row">
                    Foster Reason:
                    <div className="form-group">
                        <input name="fosterReason" defaultValue={fosterReason} type="text" onChange={handleChange} />
                    </div>
                </div>

                <div className="row">
                    <p>{animalDescriptionPlain}</p>
                </div>
                <h3>Update details about your foster</h3>
                <div className="row form-check form-check-inline">
                    <div className="column col-8">
                        Is the animal house trained/litter box trained?
                    </div>
                    <div className="column col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalHouseTrained" type="radio" className="form-check-input" defaultChecked={animalHouseTrained === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalHouseTrained" type="radio" className="form-check-input" defaultChecked={animalHouseTrained === 'No'} value="No" onChange={handleChange} />
                    </div>                    
                </div>
                <div className="row form-check form-check-inline">
                    <div className="column col-8">
                        <p>Has the animal interacted with children?</p>
                    </div>
                    <div className="column col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="interactWithChildren" type="radio" className="form-check-input" defaultChecked={interactWithChildren === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="interactWithChildren" type="radio" className="form-check-input" value="No" defaultChecked={interactWithChildren === 'No'} onChange={handleChange} />
                    </div>
                </div>
                    <div className="form-check form-check-inline">
                        <p>Has the animal interacted with other pets?</p>
                        <label className="form-check-label">Yes</label>
                        <input name="interactWithPets" type="radio" className="form-check-input" value="Yes" defaultChecked={interactWithPets === 'Yes'} onChange={handleChange} />

                        <label className="form-check-label">No</label>
                        <input name="interactWithPets" type="radio" className="form-check-input" value="No" defaultChecked={interactWithPets === 'No'} onChange={handleChange} />
                    </div>
                    <div>
                        Other Interaction Comments:
                        <div className="form-group">
                            <input name="interactionComments" defaultValue={interactionComments} type="text" rows="3" onChange={handleChange} />
                        </div>
                    </div>

                    <p><strong>Notice!</strong> Please fill out the below sections after the animal has been in the home for at least 3 days.</p>
                    <div className="form-group">
                        <p>When you first brought the animal home they (please mark all that apply):</p>
                        <p>
                            <label htmlFor="initialReaction1">
                                <input type="checkbox" name="initialReaction1" className="form-check-input" value="Yes" defaultChecked={initialReaction1} onChange={handleChange} />
                                <span>Explored the environment with a tall body posture.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="initialReaction2">
                                <input type="checkbox" name="initialReaction2" className="form-check-input" value="Yes" defaultChecked={initialReaction2} onChange={handleChange} />
                                <span>Explored the environment with a crouched body posture.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="initialReaction3">
                                <input type="checkbox" name="initialReaction3" className="form-check-input" value="Yes" defaultChecked={initialReaction3} onChange={handleChange} />
                                <span>Initially found a place to hide but came out later to explore.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="initialReaction4">
                                <input type="checkbox" name="initialReaction4" className="form-check-input" value="Yes" defaultChecked={initialReaction4} onChange={handleChange} />
                                <span>Quickly found a place to hide and remained there.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When greeting or approaching the animal they (please mark all that apply):</p>
                        <p>
                            <label htmlFor="greetingReaction1">
                            <input type="checkbox" name="greetingReaction1" className="form-check-input" value="Yes" defaultChecked={greetingReaction1} onChange={handleChange} />
                                <span>Solicits attention by rubbing, chirping, etc.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction2">
                                <input type="checkbox" name="greetingReaction2" className="form-check-input" value="Yes" defaultChecked={greetingReaction2} onChange={handleChange} />
                                <span>Does not approach.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction3">
                                <input type="checkbox" name="greetingReaction3" className="form-check-input" value="Yes" defaultChecked={greetingReaction3} onChange={handleChange} />
                                <span>Retreats or attempts to hide.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction4">
                                <input type="checkbox" name="greetingReaction4" className="form-check-input" value="Yes" defaultChecked={greetingReaction4} onChange={handleChange} />
                                <span>Approaches after encouraged.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction5">
                                <input type="checkbox" name="greetingReaction5" className="form-check-input" value="Yes" defaultChecked={greetingReaction5} onChange={handleChange} />
                                <span>Does not approach but meows, chirps, wags tail, or blinks.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction6">
                                <input type="checkbox" name="greetingReaction6" className="form-check-input" value="Yes" defaultChecked={greetingReaction6} onChange={handleChange} />
                                <span>Charges towards you.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction7">
                                <input type="checkbox" name="greetingReaction7" className="form-check-input" value="Yes" 
                                defaultChecked={greetingReaction7} 
                                onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When petting the animal they (please mark all that apply):</p>
                        <p>
                            <label htmlFor="pettingReaction1">
                                <input type="checkbox" name="pettingReaction1" className="form-check-input" value="Yes" defaultChecked={pettingReaction1} onChange={handleChange} />
                                <span>Rubs against legs or hand.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction2">
                                <input type="checkbox" name="pettingReaction2" className="form-check-input" value="Yes" defaultChecked={pettingReaction2} onChange={handleChange} />
                                <span>Sniffs or head-butts your hand.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction3">
                                <input type="checkbox" name="pettingReaction3" className="form-check-input" value="Yes" defaultChecked={pettingReaction3} onChange={handleChange} />
                                <span>Rolls on back or rolls over.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction4">
                                <input type="checkbox" name="pettingReaction4" className="form-check-input" value="Yes" defaultChecked={pettingReaction4} onChange={handleChange} />
                                <span>Avoids petting or is tense when petted.</span>
                            </label>
                        </p>
                        </div>
                        <p>
                            <label htmlFor="pettingReaction5">
                                <input type="checkbox" name="pettingReaction5" className="form-check-input" value="Yes" defaultChecked={pettingReaction5} onChange={handleChange} />
                                <span>Swats or attempts to swat hand.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction6">
                                <input type="checkbox" name="pettingReaction6" className="form-check-input" value="Yes" defaultChecked={pettingReaction6} onChange={handleChange} />
                                <span>Meows, purrs, and/or chirps.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction7">
                                <input type="checkbox" name="pettingReaction7" className="form-check-input" value="Yes" defaultChecked={pettingReaction7} onChange={handleChange} />
                                <span>Circles you attentively.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction8">
                                <input type="checkbox" name="pettingReaction8" className="form-check-input" value="Yes" defaultChecked={pettingReaction8} onChange={handleChange} />
                                <span>Shows initial fear but then relaxes.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction9">
                                <input type="checkbox" name="pettingReaction9" className="form-check-input" value="Yes" defaultChecked={pettingReaction9} onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction10">
                                <input type="checkbox" name="pettingReaction10" className="form-check-input" value="Yes" defaultChecked={pettingReaction10} onChange={handleChange} />
                                <span>Bites or attempts to bite hand.</span>
                            </label>
                        </p>
                    {/* </div> */}
                    <div className="form-group">
                        <p>When engaging in play the animal (please mark all that apply):</p>
                        <p>
                            <label htmlFor="playReaction1">
                                <input type="checkbox" name="playReaction1" className="form-check-input" value="Yes" defaultChecked={playReaction1}  onChange={handleChange} />
                                <span>Eagerly chases toy and engages in play.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction2">
                                <input type="checkbox" name="playReaction2" className="form-check-input" value="Yes" defaultChecked={playReaction2} onChange={handleChange} />
                                <span>Ignores the toy and avoids contact with you.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction3">
                                <input type="checkbox" name="playReaction3" className="form-check-input" value="Yes" defaultChecked={playReaction3} onChange={handleChange} />
                                <span>Ignores toys and attends to something else.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction4">
                                <input type="checkbox" name="playReaction4" className="form-check-input" value="Yes" defaultChecked={playReaction4} onChange={handleChange} />
                                <span>Watches the toy intently but does not engage in play.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction5">
                                <input type="checkbox" name="playReaction5" className="form-check-input" value="Yes" defaultChecked={playReaction5} onChange={handleChange} />
                                <span>Ignores toys but comes to you for petting/attention.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When picked up and held they (please mark all that apply):</p>
                        <p>
                            <label htmlFor="holdingReaction1">
                                <input type="checkbox" name="holdingReaction1" className="form-check-input" value="Yes" defaultChecked={holdingReaction1} onChange={handleChange} />
                                <span>Meows, purrs, or licks when held.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction2">
                                <input type="checkbox" name="holdingReaction2" className="form-check-input" value="Yes" defaultChecked={holdingReaction2} onChange={handleChange} />
                                <span>Accepts the hold but is a little tense.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction3">
                                <input type="checkbox" name="holdingReaction3" className="form-check-input" value="Yes" defaultChecked={holdingReaction3} onChange={handleChange} />
                                <span>Struggles to escape.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction4">
                                <input type="checkbox" name="holdingReaction4" className="form-check-input" value="Yes" defaultChecked={holdingReaction4} onChange={handleChange} />
                                <span>Struggles to escape.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction5">
                                <input type="checkbox" name="holdingReaction5" className="form-check-input" value="Yes" defaultChecked={holdingReaction5} onChange={handleChange} />
                                <span>Extends a paw to your neck/shoulder in a kind manner.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction6">
                                <input type="checkbox" name="holdingReaction6" className="form-check-input" value="Yes" defaultChecked={holdingReaction6} onChange={handleChange} />
                                <span>Stiffens, very uncomfortable when held.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction7">
                                <input type="checkbox" name="holdingReaction7" className="form-check-input" value="Yes" defaultChecked={holdingReaction7} onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction8">
                                <input type="checkbox" name="holdingReaction8" className="form-check-input" value="Yes" defaultChecked={holdingReaction8} onChange={handleChange} />
                                <span>Bites or attempts to bite.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>In your opinion, which home setting would this animal be suited for?</p>
                        <div className="form-check form-check-inline">
                            <div className="row">
                                <p>A family with children.</p>
                            </div>
                            <div className="row">
                                <label className="form-check-label">Yes</label>
                                <input name="animalOKWithKids" type="radio" className="form-check-input" defaultChecked={animalOKWithKids} value="Yes" onChange={handleChange} />

                                <label className="form-check-label">No</label>
                                <input name="animalOKWithKids" type="radio" className="form-check-input" 
                                defaultChecked={animalOKWithKids} value="No" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKWithAdults">
                                <input type="checkbox" name="animalOKWithAdults" className="form-check-input"
                                defaultChecked={animalOKWithAdults}
                                value="Yes" onChange={handleChange} />
                                <span>Adults only.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKForSeniors">
                                <input type="checkbox" name="animalOKForSeniors" className="form-check-input" 
                                defaultChecked={animalOKForSeniors}
                                value="Yes" onChange={handleChange} />
                                <span>Seniors.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKWithCats">
                                <input type="checkbox" name="animalOKWithCats" className="form-check-input" defaultChecked={animalOKWithCats}
                                value="Yes" onChange={handleChange} />
                                <span>A home with other cats.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKWithDogs">
                                <input type="checkbox" name="animalOKWithDogs" className="form-check-input" defaultChecked={animalOKWithDogs}
                                value="Yes" onChange={handleChange} />
                                <span>A home with other dogs.</span>
                            </label>
                        </p>
                    </div>
                    <p>Update animal profile:</p>
                    <div className="form-group">
                        <input name="animalProfile" defaultValue={animalProfile} type="text" size="35" onChange={handleChange} />
                    </div>
            </form>
        </div>
    )
}

export default UpdateForm;