import React, { Component } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Nav extends Component {
  componentWillUnmount() {
      window.clearTimeout(this.timeout)
  }
  render() {
      return (
 
        <MDBNav pills color="unique">
          <MDBNavItem>
            <MDBNavLink active to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/search">Search</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/fosters">My Fosters</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/history">My Past Fosters</MDBNavLink>
          </MDBNavItem>
        </MDBNav>


      )
  }
}

export default Nav

// export default () => (

// );

