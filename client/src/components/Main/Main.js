<<<<<<< HEAD
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
=======
import React from "react";
import './Main.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



function Main(props) {


    return (

        <Container maxWidth="med" className="main__container">
        <Grid container direction = "column"
        justify = "center"
        alignItems = "center"
       >


        <Link href="/" className="main__link main__home">
          Home
        </Link>



        <Link href="/search" className="main__link main__search">
          Find Fosters
        </Link>


      <Link href="/fosters" className="main__link main__fosters">
        My Fosters
      </Link>

      <Link href="/history" className="main__link main__history">
        My Past Fosters
      </Link>

        </Grid> 
        </Container>


    )
>>>>>>> 2a36e05a44986093c20e48da8c34220d238bf9f3
}

export default Nav;
