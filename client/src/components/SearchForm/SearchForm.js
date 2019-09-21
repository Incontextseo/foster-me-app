import React from "react";
import './SearchForm.css';

function SearchForm(props) {
    const { handleInputChange, handleSelectionChange, handleFormSubmit, searchZip} = props;
    return(
        <div className="container">
            <div className="row search-form">
                <form>
                        <div className="input-group" id="animalType" name="animalType">
                            <select onChange={handleSelectionChange} defaultValue="None">
                                <option value="None" disabled>Choose an animal to foster</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </select>
                            {/* <label>Type of animal</label> */}
                        </div>
                        <input 
                            className="input-group"
                            placeholder="Enter your zip code" 
                            id="searchZip" 
                            type="text" 
                            name="searchZip" 
                            onChange={handleInputChange} 
                            value={searchZip}
                        />
                        {/* <label htmlFor="searchZip">Your zip code</label> */}
                    <button className="btn" type="submit" name="action" onClick={handleFormSubmit}>Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;