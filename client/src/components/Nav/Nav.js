import React, { Component } from "react";

import Logo from './../../Styles/Images/logo-naked.png';
import Toggler from './../../Styles/Images/toggle-bar.png';
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
          <li className="list__items nav__home"><a href="/">Home</a></li>
          <li className="list__items nav__search"><a href="/search">Search</a></li>
          <li className="list__items nav__fosters"><a href="/fosters">My Fosters</a></li>
          <li className="list__items nav__history"><a href="/history">My Past Fosters</a></li>
        </ul>

        <img src={Toggler} onClick={this.toggleCollapse} className="nav__toggle"/>
        </div>


      )
  }
}

export default Nav

// export default () => (

// );

