import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="font-small pt-4 mt-4 footer__container">

      <div className="footer-copyright text-center py-3">
        <div>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Foster Me Inc. </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;