import React, { Component } from "react";

import Logo from './../../Styles/Images/logo-naked.png';
import "./Nav.css";

class Nav extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    console.log("Test");
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
      return (
        <div className="nav__container">
          <img className="nav__logo" src={Logo} alt="foster me"/>
        
        <ul className={`nav ${this.state.isOpen?"open": ""}`}    >
          <li className="list__items"><a href="/">Home</a></li>
          <li className="list__items"><a href="/search">Search</a></li>
          <li className="list__items"><a href="/fosters">My Fosters</a></li>
          <li className="list__items"><a href="/history">My Past Fosters</a></li>
        </ul>

        <button onClick={this.toggleCollapse} className="nav__toggle">Click Me!!</button>
        </div>


      )
  }
}

export default Nav

// export default () => (

// );

