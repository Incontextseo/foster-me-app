import React from "react";
import './Button.css'

function Button(props) {

    const { animalID, buttonText, onClick} = props;

    return (

        <button 
            className="btn" 
            data-id={animalID}
            onClick={onClick}

            >{buttonText}
        </button>
    )}

export default Button;