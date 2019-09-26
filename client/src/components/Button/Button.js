import React from "react";
import './Button.css';

function Button(props) {

    const { animalID, buttonText, onClick} = props;

    return (
        <div className="decision__button__container">
            <button 
                className="search__btn decision__btn" 
                data-id={animalID}
                onClick={onClick}

                >{buttonText}
            </button>
        </div>
    )}

export default Button;