import React from "react";
import './Button.css';

function Button(props) {

    const { animalID, buttonText, onClick} = props;

    return (
        <div className="col-12">
            <button 
                className="btn" 
                data-id={animalID}
                onClick={onClick}

                >{buttonText}
            </button>
        </div>
    )}

export default Button;