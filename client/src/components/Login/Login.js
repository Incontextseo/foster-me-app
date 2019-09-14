import React from 'react'
import './Login.css'

function Login (props) {

    const { fosterID, fosterName} = props;

        return (
            <article id={fosterID}>
                <button 
                    className="btn waves-effect waves-light" 
                    // onClick={() => handleFosterClick(fosterID)}
                    data-id={fosterID}
                >{fosterName}</button>
            </article>
        )
    }

export default Login