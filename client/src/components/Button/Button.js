import React from "react";
<<<<<<< HEAD
import './Button.css';
=======
import './Button.css'
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b

function Button(props) {

    const { animalID, buttonText, onClick} = props;

    return (
<<<<<<< HEAD
        <div className="col-12">
            <button 
                className="btn" 
                data-id={animalID}
                onClick={onClick}

                >{buttonText}
            </button>
        </div>
=======

        <button 
            className="btn" 
            data-id={animalID}
            onClick={onClick}

            >{buttonText}
        </button>
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
    )}

export default Button;