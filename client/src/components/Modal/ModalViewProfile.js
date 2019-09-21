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
          animalName: props.animalName, 
          animalSpecies: props.animalSpecies, 
          animalGeneralAge: props.animalGeneralAge, 
          animalSex: props.animalSex, 
          animalBreed: props.animalBreed,
          fosterReason: props.fosterReason,
          animalHouseTrained: props.animalHouseTrained,
          interactWithChildren: props.interactWithChildren,
          interactWithPets: props.interactWithPets,
          interactionComments: props.interactionComments,
          initialReaction: props.initialReaction,
          greetingReaction: props.greetingReaction,
          pettingReaction: props.pettingReaction,
          playReaction: props.playReaction,
          holdingReaction: props.holdingReaction,
          animalOKWithKids: props.animalOKWithKids,
          animalOKWithAdults: props.animalOKWithAdults,
          animalOKForSeniors: props.animalOKForSeniors,
          animalOKWithCats: props.animalOKWithCats,
          animalOKWithDogs: props.animalOKWithDogs,
          animalDescriptionPlain: props.animalDescriptionPlain
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


render() {
  console.log('this props', this.props);
  return (
    <MDBContainer>
      <MDBBtn data-id={this.props.animalID} onClick={this.toggle}>View Profile</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} backdrop={false}  size="fluid" >
        <MDBModalHeader toggle={this.toggle}>View Your Foster's Profile</MDBModalHeader>
        <MDBModalBody>
            <ViewProfile
              animalID = {this.props.animalID}
              animalName = {this.props.animalName} 
              animalSpecies = {this.props.animalSpecies} 
              animalGeneralAge= {this.props.animalGeneralAge} 
              animalSex= {this.props.animalSex}
              animalBreed= {this.props.animalBreed}
              fosterReason= {this.props.fosterReason}
              animalHouseTrained= {this.props.animalHouseTrained}
              interactWithChildren= {this.props.interactWithChildren}
              interactWithPets= {this.props.interactWithPets}
              interactionComments= {this.props.interactionComments}
              initialReaction= {this.props.initialReaction}
              greetingReaction= {this.props.greetingReaction}
              pettingReaction= {this.props.pettingReaction}
              playReaction= {this.props.playReaction}
              holdingReaction= {this.props.holdingReaction}
              animalOKWithKids= {this.props.animalOKWithKids}
              animalOKWithAdults= {this.props.animalOKWithAdults}
              animalOKForSeniors= {this.props.animalOKForSeniors}
              animalOKWithCats= {this.props.animalOKWithCats}
              animalOKWithDogs= {this.props.animalBreedanimalOKWithDogs}
              animalDescriptionPlain= {this.props.animalDescriptionPlain}
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