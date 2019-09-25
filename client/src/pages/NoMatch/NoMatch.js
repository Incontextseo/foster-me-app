import React from "react";
import "./NoMatch.css";

function NoMatch() {
    return(
        <div>
            <h1><i className="em-svg em-pouting_cat"></i> Sorry! Page not found.</h1>
            <p>Go <a href="/">"Home"</a> to try again.</p>
        </div>
    );
};

export default NoMatch;