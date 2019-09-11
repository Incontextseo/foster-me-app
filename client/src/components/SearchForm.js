import React from "react";

function SearchForm(props) {
    const { handleInputChange, handleSelectionChange, handleFormSubmit, searchZip } = props;
    return(
        <div className="container">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <h4>Find animals to foster near you</h4>
                    <div className="input-field col s12" id="animalType" name="animalType">
                        <select onChange={handleSelectionChange} defaultValue="None">
                            <option value="None" disabled>Choose an animal to foster</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                        </select>
                        <label>Type of animal</label>
                    </div>
                    <input 
                        placeholder="Enter your zip code" 
                        id="searchZip" 
                        type="text" 
                        name="searchZip" 
                        onChange={handleInputChange} 
                        value={searchZip}
                    />
                    <label htmlFor="searchZip">Your zip code</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleFormSubmit}>Submit
                </button>
            </form>
        </div>
        </div>
    );
};

export default SearchForm;