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
                    <div className="col-6">
                        <p>Name: {animalName}</p>
                        <p>Species: {animalSpecies}</p>
                        <p>Age: {animalGeneralAge}</p>
                    </div>
                    <div className="col-6">
                        <p>Animal ID: {animalID}</p>
                        <p>Gender: {animalSex}</p>
                        <p>Breed: {animalBreed}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        Foster Reason:
                        <div className="form-group">
                            <input name="fosterReason" defaultValue={fosterReason} type="text" row="30" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <p>{animalDescriptionPlain}</p>
                </div>
                <h3>Update details about your foster</h3>
                <div className="row form-check form-check-inline">
                    <div className="column col-8">
                        <p>Is the animal house trained/litter box trained?</p>
                    </div>
                    <div className="column col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalHouseTrained" type="radio" className="form-check-input" defaultChecked={animalHouseTrained === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalHouseTrained" type="radio" className="form-check-input" defaultChecked={animalHouseTrained === 'No'} value="No" onChange={handleChange} />
                    </div>                    
                </div>
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Has the animal interacted with children?</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="interactWithChildren" type="radio" className="form-check-input" defaultChecked={interactWithChildren === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="interactWithChildren" type="radio" className="form-check-input" value="No" defaultChecked={interactWithChildren === 'No'} onChange={handleChange} />
                    </div>
                </div>
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Has the animal interacted with other pets?</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="interactWithPets" type="radio" className="form-check-input" defaultChecked={interactWithPets === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="interactWithPets" type="radio" className="form-check-input" value="No" defaultChecked={interactWithPets === 'No'} onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        Other Interaction Comments:
                        <div className="form-group">
                            <input name="interactionComments" defaultValue={interactionComments} type="text" size="50" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><strong>Notice!</strong> Please fill out the below sections after the animal has been in the home for at least 3 days.</p>
                    </div>
                </div>
                <h4>When you first brought the animal home they:</h4>
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Explored the environment with a tall body posture.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="initialReaction1" type="radio" className="form-check-input" defaultChecked={initialReaction1 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="initialReaction1" type="radio" className="form-check-input" value="No" defaultChecked={initialReaction1 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                    {/* <div className="form-group">
                        <p></p>
                        <p>
                            <label htmlFor="initialReaction1">
                                <input type="checkbox" name="initialReaction1" className="form-check-input" value="Yes" defaultChecked={initialReaction1} onChange={handleChange} />
                                <span>Explored the environment with a tall body posture.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Explored the environment with a crouched body posture.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="initialReaction2" type="radio" className="form-check-input" defaultChecked={initialReaction2 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="initialReaction2" type="radio" className="form-check-input" value="No" defaultChecked={initialReaction2 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="initialReaction2">
                                <input type="checkbox" name="initialReaction2" className="form-check-input" value="Yes" defaultChecked={initialReaction2} onChange={handleChange} />
                                <span>Explored the environment with a crouched body posture.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Initially found a place to hide but came out later to explore.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="initialReaction3" type="radio" className="form-check-input" defaultChecked={initialReaction3 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="initialReaction3" type="radio" className="form-check-input" value="No" defaultChecked={initialReaction3 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="initialReaction3">
                                <input type="checkbox" name="initialReaction3" className="form-check-input" value="Yes" defaultChecked={initialReaction3} onChange={handleChange} />
                                <span>Initially found a place to hide but came out later to explore.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Quickly found a place to hide and remained there.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="initialReaction4" type="radio" className="form-check-input" defaultChecked={initialReaction4 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="initialReaction4" type="radio" className="form-check-input" value="No" defaultChecked={initialReaction4 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="initialReaction4">
                                <input type="checkbox" name="initialReaction4" className="form-check-input" value="Yes" defaultChecked={initialReaction4} onChange={handleChange} />
                                <span>Quickly found a place to hide and remained there.</span>
                            </label>
                        </p> */}
                    {/* </div> */}
                <h4>When greeting or approaching the animal they:</h4>
                    {/* <div className="form-group">
                        <p>When greeting or approaching the animal they (please mark all that apply):</p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Solicits attention by rubbing, chirping, etc.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction1" type="radio" className="form-check-input" defaultChecked={greetingReaction1 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction1" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction1 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction1">
                            <input type="checkbox" name="greetingReaction1" className="form-check-input" value="Yes" defaultChecked={greetingReaction1} onChange={handleChange} />
                                <span>Solicits attention by rubbing, chirping, etc.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Does not approach.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction2" type="radio" className="form-check-input" defaultChecked={greetingReaction2 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction2" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction2 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction2">
                                <input type="checkbox" name="greetingReaction2" className="form-check-input" value="Yes" defaultChecked={greetingReaction2} onChange={handleChange} />
                                <span>Does not approach.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Retreats or attempts to hide.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction3" type="radio" className="form-check-input" defaultChecked={greetingReaction3 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction3" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction3 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction3">
                                <input type="checkbox" name="greetingReaction3" className="form-check-input" value="Yes" defaultChecked={greetingReaction3} onChange={handleChange} />
                                <span>Retreats or attempts to hide.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Approaches after encouraged.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction4" type="radio" className="form-check-input" defaultChecked={greetingReaction4 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction4" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction4 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction4">
                                <input type="checkbox" name="greetingReaction4" className="form-check-input" value="Yes" defaultChecked={greetingReaction4} onChange={handleChange} />
                                <span>Approaches after encouraged.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Does not approach but meows, chirps, wags tail, or blinks.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction5" type="radio" className="form-check-input" defaultChecked={greetingReaction5 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction5" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction5 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction5">
                                <input type="checkbox" name="greetingReaction5" className="form-check-input" value="Yes" defaultChecked={greetingReaction5} onChange={handleChange} />
                                <span>Does not approach but meows, chirps, wags tail, or blinks.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Does not approach but meows, chirps, wags tail, or blinks.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction6" type="radio" className="form-check-input" defaultChecked={greetingReaction6 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction6" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction6 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction6">
                                <input type="checkbox" name="greetingReaction6" className="form-check-input" value="Yes" defaultChecked={greetingReaction6} onChange={handleChange} />
                                <span>Charges towards you.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Hisses or growls.                        </p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="greetingReaction7" type="radio" className="form-check-input" defaultChecked={greetingReaction7 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="greetingReaction7" type="radio" className="form-check-input" value="No" defaultChecked={greetingReaction7 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="greetingReaction7">
                                <input type="checkbox" name="greetingReaction7" className="form-check-input" value="Yes" 
                                defaultChecked={greetingReaction7} 
                                onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                    </div> */}
                <h4>When greeting or approaching the animal they:</h4>
                    {/* <div className="form-group"> */}
                        {/* <p>When petting the animal they (please mark all that apply):</p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Rubs against legs or hand.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction1" type="radio" className="form-check-input" defaultChecked={pettingReaction1 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction1" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction1 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction1">
                                <input type="checkbox" name="pettingReaction1" className="form-check-input" value="Yes" defaultChecked={pettingReaction1} onChange={handleChange} />
                                <span>Rubs against legs or hand.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Sniffs or head-butts your hand.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction2" type="radio" className="form-check-input" defaultChecked={pettingReaction2 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction2" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction2 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction2">
                                <input type="checkbox" name="pettingReaction2" className="form-check-input" value="Yes" defaultChecked={pettingReaction2} onChange={handleChange} />
                                <span>Sniffs or head-butts your hand.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Rolls on back or rolls over.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction3" type="radio" className="form-check-input" defaultChecked={pettingReaction3 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction3" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction3 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction3">
                                <input type="checkbox" name="pettingReaction3" className="form-check-input" value="Yes" defaultChecked={pettingReaction3} onChange={handleChange} />
                                <span>Rolls on back or rolls over.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Avoids petting or is tense when petted.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction4" type="radio" className="form-check-input" defaultChecked={pettingReaction4 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction4" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction4 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction4">
                                <input type="checkbox" name="pettingReaction4" className="form-check-input" value="Yes" defaultChecked={pettingReaction4} onChange={handleChange} />
                                <span>Avoids petting or is tense when petted.</span>
                            </label>
                        </p> */}
                        {/* </div> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Swats or attempts to swat hand.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction5" type="radio" className="form-check-input" defaultChecked={pettingReaction5 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction5" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction5 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction5">
                                <input type="checkbox" name="pettingReaction5" className="form-check-input" value="Yes" defaultChecked={pettingReaction5} onChange={handleChange} />
                                <span>Swats or attempts to swat hand.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Meows, purrs, and/or chirps.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction6" type="radio" className="form-check-input" defaultChecked={pettingReaction6 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction6" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction6 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction6">
                                <input type="checkbox" name="pettingReaction6" className="form-check-input" value="Yes" defaultChecked={pettingReaction6} onChange={handleChange} />
                                <span>Meows, purrs, and/or chirps.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Circles you attentively.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction7" type="radio" className="form-check-input" defaultChecked={pettingReaction7 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction7" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction7 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction7">
                                <input type="checkbox" name="pettingReaction7" className="form-check-input" value="Yes" defaultChecked={pettingReaction7} onChange={handleChange} />
                                <span>Circles you attentively.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Shows initial fear but then relaxes.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction8" type="radio" className="form-check-input" defaultChecked={pettingReaction8 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction8" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction8 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction8">
                                <input type="checkbox" name="pettingReaction8" className="form-check-input" value="Yes" defaultChecked={pettingReaction8} onChange={handleChange} />
                                <span>Shows initial fear but then relaxes.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Hisses or growls.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction9" type="radio" className="form-check-input" defaultChecked={pettingReaction9 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction9" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction9 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction9">
                                <input type="checkbox" name="pettingReaction9" className="form-check-input" value="Yes" defaultChecked={pettingReaction9} onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Bites or attempts to bite hand.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="pettingReaction10" type="radio" className="form-check-input" defaultChecked={pettingReaction10 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="pettingReaction10" type="radio" className="form-check-input" value="No" defaultChecked={pettingReaction10 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="pettingReaction10">
                                <input type="checkbox" name="pettingReaction10" className="form-check-input" value="Yes" defaultChecked={pettingReaction10} onChange={handleChange} />
                                <span>Bites or attempts to bite hand.</span>
                            </label>
                        </p> */}
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                <h4>When engaging in play with the animal they:</h4>
                        {/* <p>When engaging in play the animal (please mark all that apply):</p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Eagerly chases toy and engages in play.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="playReaction1" type="radio" className="form-check-input" defaultChecked={playReaction1 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="playReaction1" type="radio" className="form-check-input" value="No" defaultChecked={playReaction1 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="playReaction1">
                                <input type="checkbox" name="playReaction1" className="form-check-input" value="Yes" defaultChecked={playReaction1}  onChange={handleChange} />
                                <span>Eagerly chases toy and engages in play.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Ignores the toy and avoids contact with you.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="playReaction2" type="radio" className="form-check-input" defaultChecked={playReaction2 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="playReaction2" type="radio" className="form-check-input" value="No" defaultChecked={playReaction2 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="playReaction2">
                                <input type="checkbox" name="playReaction2" className="form-check-input" value="Yes" defaultChecked={playReaction2} onChange={handleChange} />
                                <span>Ignores the toy and avoids contact with you.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Ignores toys and attends to something else.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="playReaction3" type="radio" className="form-check-input" defaultChecked={playReaction3 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="playReaction3" type="radio" className="form-check-input" value="No" defaultChecked={playReaction3 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="playReaction3">
                                <input type="checkbox" name="playReaction3" className="form-check-input" value="Yes" defaultChecked={playReaction3} onChange={handleChange} />
                                <span>Ignores toys and attends to something else.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Watches the toy intently but does not engage in play.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="playReaction4" type="radio" className="form-check-input" defaultChecked={playReaction4 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="playReaction4" type="radio" className="form-check-input" value="No" defaultChecked={playReaction4 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="playReaction4">
                                <input type="checkbox" name="playReaction4" className="form-check-input" value="Yes" defaultChecked={playReaction4} onChange={handleChange} />
                                <span>Watches the toy intently but does not engage in play.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Ignores toys but comes to you for petting/attention.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="playReaction5" type="radio" className="form-check-input" defaultChecked={playReaction5 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="playReaction5" type="radio" className="form-check-input" value="No" defaultChecked={playReaction5 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="playReaction5">
                                <input type="checkbox" name="playReaction5" className="form-check-input" value="Yes" defaultChecked={playReaction5} onChange={handleChange} />
                                <span>Ignores toys but comes to you for petting/attention.</span>
                            </label>
                        </p> */}
                    {/* </div>
                    <div className="form-group"> */}
                <h4>When picked up and held they:</h4>
                        {/* <p>When picked up and held they (please mark all that apply):</p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Meows, purrs, or licks when held.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction1" type="radio" className="form-check-input" defaultChecked={holdingReaction1 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction1" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction1 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction1">
                                <input type="checkbox" name="holdingReaction1" className="form-check-input" value="Yes" defaultChecked={holdingReaction1} onChange={handleChange} />
                                <span>Meows, purrs, or licks when held.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Accepts the hold but is a little tense.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction2" type="radio" className="form-check-input" defaultChecked={holdingReaction2 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction2" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction2 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction2">
                                <input type="checkbox" name="holdingReaction2" className="form-check-input" value="Yes" defaultChecked={holdingReaction2} onChange={handleChange} />
                                <span>Accepts the hold but is a little tense.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Struggles to escape.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction3" type="radio" className="form-check-input" defaultChecked={holdingReaction3 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction3" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction3 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction3">
                                <input type="checkbox" name="holdingReaction3" className="form-check-input" value="Yes" defaultChecked={holdingReaction3} onChange={handleChange} />
                                <span>Struggles to escape.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Swats or attempts to swat.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction4" type="radio" className="form-check-input" defaultChecked={holdingReaction4 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction4" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction4 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction4">
                                <input type="checkbox" name="holdingReaction4" className="form-check-input" value="Yes" defaultChecked={holdingReaction4} onChange={handleChange} />
                                <span>Swats or attempts to swat.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Extends a paw to your neck/shoulder in a kind manner.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction5" type="radio" className="form-check-input" defaultChecked={holdingReaction5 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction5" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction5 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction5">
                                <input type="checkbox" name="holdingReaction5" className="form-check-input" value="Yes" defaultChecked={holdingReaction5} onChange={handleChange} />
                                <span>Extends a paw to your neck/shoulder in a kind manner.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Stiffens, very uncomfortable when held.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction6" type="radio" className="form-check-input" defaultChecked={holdingReaction6 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction6" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction6 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction6">
                                <input type="checkbox" name="holdingReaction6" className="form-check-input" value="Yes" defaultChecked={holdingReaction6} onChange={handleChange} />
                                <span>Stiffens, very uncomfortable when held.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Hisses or growls.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction7" type="radio" className="form-check-input" defaultChecked={holdingReaction7 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction7" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction7 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction7">
                                <input type="checkbox" name="holdingReaction7" className="form-check-input" value="Yes" defaultChecked={holdingReaction7} onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Bites or attempts to bite.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="holdingReaction8" type="radio" className="form-check-input" defaultChecked={holdingReaction8 === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="holdingReaction8" type="radio" className="form-check-input" value="No" defaultChecked={holdingReaction8 === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="holdingReaction8">
                                <input type="checkbox" name="holdingReaction8" className="form-check-input" value="Yes" defaultChecked={holdingReaction8} onChange={handleChange} />
                                <span>Bites or attempts to bite.</span>
                            </label>
                        </p> */}
                    {/* </div>
                    <div className="form-group"> */}
                <h4>In your opinion, which home setting would this animal be suited for?</h4>
                        {/* <p>In your opinion, which home setting would this animal be suited for?</p> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>A family with children.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalOKWithKids" type="radio" className="form-check-input" defaultChecked={animalOKWithKids === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalOKWithKids" type="radio" className="form-check-input" value="No" defaultChecked={animalOKWithKids === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <div className="form-check form-check-inline">
                            <div className="row">
                                <p>A family with children.</p>
                            </div>
                            <div className="row">
                                <label className="form-check-label">Yes</label>
                                <input name="animalOKWithKids" type="radio" className="form-check-input" defaultChecked={animalOKWithKids === 'Yes'} value="Yes" onChange={handleChange} />

                                <label className="form-check-label">No</label>
                                <input name="animalOKWithKids" type="radio" className="form-check-input" 
                                defaultChecked={animalOKWithKids === 'No'} value="No" onChange={handleChange} />
                            </div>
                        </div> */}
                    {/* </div>
                    <div className="form-group"> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Adults only.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalOKWithAdults" type="radio" className="form-check-input" defaultChecked={animalOKWithAdults === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalOKWithAdults" type="radio" className="form-check-input" value="No" defaultChecked={animalOKWithAdults === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="animalOKWithAdults">
                                <input type="checkbox" name="animalOKWithAdults" className="form-check-input"
                                defaultChecked={animalOKWithAdults}
                                value="Yes" onChange={handleChange} />
                                <span>Adults only.</span>
                            </label>
                        </p> */}
                    {/* </div>
                    <div className="form-group"> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>Seniors.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalOKForSeniors" type="radio" className="form-check-input" defaultChecked={animalOKForSeniors === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalOKForSeniors" type="radio" className="form-check-input" value="No" defaultChecked={animalOKForSeniors === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="animalOKForSeniors">
                                <input type="checkbox" name="animalOKForSeniors" className="form-check-input" 
                                defaultChecked={animalOKForSeniors}
                                value="Yes" onChange={handleChange} />
                                <span>Seniors.</span>
                            </label>
                        </p> */}
                    {/* </div>
                    <div className="form-group"> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>A home with other cats.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalOKWithCats" type="radio" className="form-check-input" defaultChecked={animalOKWithCats === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalOKWithCats" type="radio" className="form-check-input" value="No" defaultChecked={animalOKWithCats === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="animalOKWithCats">
                                <input type="checkbox" name="animalOKWithCats" className="form-check-input" defaultChecked={animalOKWithCats}
                                value="Yes" onChange={handleChange} />
                                <span>A home with other cats.</span>
                            </label>
                        </p> */}
                    {/* </div>
                    <div className="form-group"> */}
                <div className="row form-check form-check-inline">
                    <div className="col-8">
                        <p>A home with other dogs.</p>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">Yes</label>
                        <input name="animalOKWithDogs" type="radio" className="form-check-input" defaultChecked={animalOKWithDogs === 'Yes'} value="Yes" onChange={handleChange} />
                        <label className="form-check-label">No</label>
                        <input name="animalOKWithDogs" type="radio" className="form-check-input" value="No" defaultChecked={animalOKWithDogs === 'No'} onChange={handleChange} />
                    </div>
                </div>
                        {/* <p>
                            <label htmlFor="animalOKWithDogs">
                                <input type="checkbox" name="animalOKWithDogs" className="form-check-input" defaultChecked={animalOKWithDogs}
                                value="Yes" onChange={handleChange} />
                                <span>A home with other dogs.</span>
                            </label>
                        </p> */}
                    {/* </div> */}
                    <h4>Update animal profile:</h4>
                    <div className="row">
                        <div className="col-12">
                            <input name="animalProfile" defaultValue={animalProfile} type="text" size="50" onChange={handleChange} />
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default UpdateForm;