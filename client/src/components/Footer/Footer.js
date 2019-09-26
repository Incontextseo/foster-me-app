import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer__container">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Change a Life!</h5>
            <p>
              Adopt, Dont Shop 	&hearts;	&hearts;
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">See Our Project Below</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/Incontextseo/foster-me-app">Git Hub</a>
              </li>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Foster Me Inc. </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;