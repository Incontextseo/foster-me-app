import React from 'react'
import './Login.css'

function Login (props) {

    const { fosterID, fosterName, buttonText} = props;

        return (
            <article id={fosterID}>
                This is the Login! Once logged in, you see a menu of buttons to go to:
                - Search Fosters
                - My Fosters
                - Foster History
                <h1>Choose Your Name Below To Begin {fosterName}</h1>
                <p>{fosterName}</p>
                <button 
                    className="btn waves-effect waves-light" 
                    // onClick={() => handleFosterClick(fosterID)}
                    data-id={fosterID}
                >{buttonText}</button>
            </article>
        )
    }

export default Login