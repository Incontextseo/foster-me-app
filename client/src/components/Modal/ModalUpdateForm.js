import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { MDBInput } from "mdbreact";
import './Modal.css';
import UpdateForm from "../UpdateForm";
import API from '../../utils/API';

class ModalLogin extends Component {
    constructor () {
        super();
        this.state = {
          modal: false,
          animals: [],
          fosterReason: "",
          animalHouseTrained: "",
          interactWithChildren: "",
          interactWithPets: "",
          interactionComments: "",
          initialReaction: "",
          greetingReaction: "",
          pettingReaction: "",
          playReaction: "",
          holdingReaction: "",
          animalOKWithKids: "",
          animalOKWithAdults: "",
          animalOKForSeniors: "",
          animalOKWithCats: "",
          animalOKWithDogs: "",
          animalDescriptionPlain: "",
          fosterStatus: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

handleSubmit = event => {
    event.preventDefault();

    API.updateAnimal(
        this.state.fosterReason,
        this.state.animalHouseTrained,
        this.state.interactWithChildren,
        this.state.interactWithPets,
        this.state.interactionComments,
        this.state.initialReaction, 
        this.state.greetingReaction,
        this.state.pettingReaction,
        this.state.playReaction,
        this.state.holdingReaction,
        this.state.animalOKWithKids,
        this.state.animalOKWithAdults,
        this.state.animalOKForSeniors,
        this.state.animalOKWithCats,
        this.state.animalOKWithDogs,
        this.state.animalDescriptionPlain,
        this.state.fosterStatus
    )
    .then(
        API.getCurrentFosters()
        .then(res => {
            console.log("res.data from getCurrentFosters method: ", res.data)
            this.setState({animals: res.data})
          })
          .catch(err => console.log(err))
        )
    .catch(err => console.log(err))
    
}

render() {
  return (
    <MDBContainer>
      <MDBBtn data-id={this.animalID} onClick={this.toggle}>Update foster info</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
        <MDBModalHeader toggle={this.toggle}>Update info on your foster animal</MDBModalHeader>
        <MDBModalBody>
            <UpdateForm 
                handleChange={this.handleChange}
                animalID={this.animalID}
                animalName={this.animalName}
                animalGeneralAge={this.animalGeneralAge}
                animalSex={this.animalSex}
                animalBreed={this.animalBreed}
            />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Cancel</MDBBtn>
          <MDBBtn color="primary" onClick={this.handleSubmit}>Save Changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}


export default ModalLogin;
