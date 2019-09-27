import React, { Component } from "react";

// import Logo from './../../Styles/Images/logo-naked.png';
// import Toggler from './../../Styles/Images/toggle-bar.png';
import "./Main.css";

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
        <div className="main__full"><h1>FOSTER ME APP </h1>
        <div className="main__container">

        
        <ul className="main__nav">
          <li className="main__list__items main__home"><a href="/">Home</a></li>
          <li className="main__list__items main__search"><a href="/search">Search</a></li>
          <li className="main__list__items main__fosters"><a href="/fosters">My Fosters</a></li>
          <li className="main__list__items main__history"><a href="/history">My Past Fosters</a></li>
        </ul>

        </div>

       </div>
      )
  }
}

export default Nav;
