import React from "react";
import './SearchForm.css';
// import Button from '@material-ui/core/Button';


function SearchForm(props) {
    const { handleInputChange, handleSelectionChange, handleFormSubmit, searchZip} = props;
    return(
        <div className="search__container">
            <div className="search-form">
                <form className="search__body">
                        <div className="input__group input__group__select" id="animalType" name="animalType">
                            <select onChange={handleSelectionChange} defaultValue="None">
                                <option value="None" disabled>Choose an animal to foster</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            
                            </select>
                            {/* <label>Type of animal</label> */}
                        </div>

                        
                        <input 
                            className="input__group"
                            placeholder="Enter your zip code" 
                            id="searchZip" 
                            type="text" 
                            name="searchZip" 
                            onChange={handleInputChange} 
                            value={searchZip}
                        />
                        {/* <label htmlFor="searchZip">Your zip code</label> */}

                    <button className="search__btn" type="submit" name="action" onClick={handleFormSubmit}>Search
                    </button>


                </form>
            </div>
        </div>
    );
};

export default SearchForm;