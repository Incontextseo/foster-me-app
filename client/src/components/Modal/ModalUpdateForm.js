import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { MDBInput } from "mdbreact";
import './Modal.css';
import UpdateForm from "../UpdateForm";
import API from '../../utils/API';

class ModalUpdateForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
          modal: false,
          animals: [],
          animalID: props.animalID,
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
        this.handleOptionChange = this.handleOptionChange.bind(this);
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

handleOptionChange = event => {
  console.log("handleOptionChange")
    this.setState({[event.target.name]: event.target.checked});
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
      // animalDescriptionPlain: this.state.animalDescriptionPlain,
      animalProfile: this.state.animalProfile
    })
    .then(this.toggle)
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
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} backdrop={false}  size="fluid" >
        <MDBModalHeader toggle={this.toggle}>Update your foster's profile</MDBModalHeader>
        <MDBModalBody>
            <UpdateForm 
                handleChange={this.handleChange}
                handleOptionChange={this.handleOptionChange}
                animalID={this.props.animalID}
                animalName={this.props.animalName}
                fosterReason={this.props.fosterReason}
                animalGeneralAge={this.props.animalGeneralAge}
                animalSex={this.props.animalSex}
                animalBreed={this.props.animalBreed}
                interactionComments={this.props.interactionComments}
                animalDescriptionPlain={this.props.animalDescriptionPlain}
                animalHouseTrained= {this.props.animalHouseTrained}
                interactWithChildren= {this.props.interactWithChildren}
                interactWithPets= {this.props.interactWithPets}
                animalProfile= {this.props.animalProfile}
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

export default ModalUpdateForm;