import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { MDBInput } from "mdbreact";
import './Modal.css';
import UpdateForm from "../UpdateForm";
import API from '../../utils/API';

<<<<<<< HEAD
class ModalUpdateForm extends Component {
=======
class ModalLogin extends Component {
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
    constructor (props) {
        super(props);
        this.state = {
          modal: false,
          animals: [],
          animalID: props.animalID,
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
<<<<<<< HEAD
          animalDescriptionPlain: ""
=======
          animalDescriptionPlain: "",
          fosterStatus: ""
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
        };
        this.handleChange = this.handleChange.bind(this);
      }

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handleChange = event => {
  console.log("handleChange")
    this.setState({[event.target.name]: event.target.value});
  };

handleSubmit = event => {
    event.preventDefault();

    API.updateAnimal({
      animalID: this.state.animalID,
      fosterReason: this.state.fosterReason,
      animalHouseTrained: this.state.animalHouseTrained,
      interactWithChildren: this.state.interactWithChildren,
      interactWithPets: this.state.interactWithPets,
      interactionComments: this.state.interactionComments,
      initialReaction: this.state.initialReaction, 
      greetingReaction: this.state.greetingReaction,
      pettingReaction: this.state.pettingReaction,
      playReaction: this.state.playReaction,
      holdingReaction: this.state.holdingReaction,
      animalOKWithKids: this.state.animalOKWithKids,
      animalOKWithAdults: this.state.animalOKWithAdults,
      animalOKForSeniors: this.state.animalOKForSeniors,
      animalOKWithCats: this.state.animalOKWithCats,
      animalOKWithDogs: this.state.animalOKWithDogs,
      animalDescriptionPlain: this.state.animalDescriptionPlain,
<<<<<<< HEAD
    })
    .then(this.toggle)
=======
      fosterStatus: this.state.fosterStatus

    })
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
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
  console.log('this props', this.props);
  return (
    <MDBContainer>
      <MDBBtn data-id={this.props.animalID} onClick={this.toggle}>Update foster info</MDBBtn>
<<<<<<< HEAD
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} backdrop={false}  size="fluid" >
        <MDBModalHeader toggle={this.toggle}>Update your foster's profile</MDBModalHeader>
=======
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="fluid">
        <MDBModalHeader toggle={this.toggle}>Update info on your foster animal</MDBModalHeader>
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
        <MDBModalBody>
            <UpdateForm 
                handleChange={this.handleChange}
                animalID={this.props.animalID}
                animalName={this.props.animalName}
                animalGeneralAge={this.props.animalGeneralAge}
                animalSex={this.props.animalSex}
                animalBreed={this.props.animalBreed}
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

<<<<<<< HEAD
export default ModalUpdateForm;
=======

export default ModalLogin;
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
