import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
// import Logo from './../../Styles/Images/logo-naked.png';
import "./Nav.css";

class Nav extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
      return (

        <Router>
          <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
          <img src="" className="nav__logo" alt=""/>
        </MDBNavbarBrand>


        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>

          </MDBNavbarNav>
        </MDBCollapse>

          </MDBNavbar>
        </Router>


      )
  }
}

export default Nav

// export default () => (

// );

