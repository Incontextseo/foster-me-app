import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { MDBInput } from "mdbreact";
import './Modal.css';
import ViewProfile from "../ViewProfile";
// import API from '../../utils/API';

class ModalViewProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
          modal: false,
          animals: [],
          animalID: props.animalID,
          fosterReason: props.fosterReason,
          animalHouseTrained: props.animalHouseTrained,
          interactWithChildren: props.interactWithChildren,
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
          animalDescriptionPlain: ""
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

// handleSubmit = event => {
//     event.preventDefault();

//     API.updateAnimal({
//       animalID: this.state.animalID,
//       fosterReason: this.state.fosterReason,
//       animalHouseTrained: this.state.animalHouseTrained,
//       interactWithChildren: this.state.interactWithChildren,
//       interactWithPets: this.state.interactWithPets,
//       interactionComments: this.state.interactionComments,
//       initialReaction: this.state.initialReaction, 
//       greetingReaction: this.state.greetingReaction,
//       pettingReaction: this.state.pettingReaction,
//       playReaction: this.state.playReaction,
//       holdingReaction: this.state.holdingReaction,
//       animalOKWithKids: this.state.animalOKWithKids,
//       animalOKWithAdults: this.state.animalOKWithAdults,
//       animalOKForSeniors: this.state.animalOKForSeniors,
//       animalOKWithCats: this.state.animalOKWithCats,
//       animalOKWithDogs: this.state.animalOKWithDogs,
//       animalDescriptionPlain: this.state.animalDescriptionPlain,
//     })
//     .then(
//         API.getCurrentFosters()
//         .then(res => {
//             console.log("res.data from getCurrentFosters method: ", res.data)
//             this.setState({animals: res.data})
//           })
//           .catch(err => console.log(err))
//         )
//     .catch(err => console.log(err))
    
// }

render() {
  console.log('this props', this.props);
  return (
    <MDBContainer>
      <MDBBtn data-id={this.props.animalID} onClick={this.toggle}>View Profile</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} backdrop={false}  size="fluid" >
        <MDBModalHeader toggle={this.toggle}>View Your Foster's Profile</MDBModalHeader>
        <MDBModalBody>
            <ViewProfile
            />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalViewProfile;