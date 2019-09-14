import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from "mdbreact";
import './Modal.css';
​
​
class ModalPage extends Component {
state = {
  modal: false
}
​
toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
​
render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Please Log In</MDBModalHeader>
        <MDBModalBody>
        <MDBInput label="E-Mail" />
        <MDBInput label="Password" />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Log In</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}
​
export default ModalPage;
​