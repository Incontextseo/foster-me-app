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
          initialReaction1: props.initialReaction1,
          initialReaction2: props.initialReaction2,
          initialReaction3: props.initialReaction3,
          initialReaction4: props.initialReaction4,
          greetingReaction1: props.greetingReaction1,
          greetingReaction2: props.greetingReaction2,
          greetingReaction3: props.greetingReaction3,
          greetingReaction4: props.greetingReaction4,
          greetingReaction5: props.greetingReaction5,
          greetingReaction6: props.greetingReaction6,
          greetingReaction7: props.greetingReaction7,
          pettingReaction1: props.pettingReaction1,
          pettingReaction2: props.pettingReaction2,
          pettingReaction3: props.pettingReaction3,
          pettingReaction4: props.pettingReaction4,
          pettingReaction5: props.pettingReaction5,
          pettingReaction6: props.pettingReaction6,
          pettingReaction7: props.pettingReaction7,
          pettingReaction8: props.pettingReaction8,
          pettingReaction9: props.pettingReaction8,
          pettingReaction10: props.pettingReaction10,
          playReaction1: props.playReaction1,
          playReaction2: props.playReaction2,
          playReaction3: props.playReaction3,
          playReaction4: props.playReaction4,
          playReaction5: props.playReaction5,
          holdingReaction1: props.holdingReaction1,
          holdingReaction2: props.holdingReaction2,
          holdingReaction3: props.holdingReaction3,
          holdingReaction4: props.holdingReaction,
          holdingReaction5: props.holdingReaction5,
          holdingReaction6: props.holdingReaction6,
          holdingReaction7: props.holdingReaction7,
          holdingReaction8: props.holdingReaction8,
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
      initialReaction1: this.state.initialReaction1,
      initialReaction2: this.state.initialReaction2,
      initialReaction3: this.state.initialReaction3,
      initialReaction4: this.state.initialReaction4,
      greetingReaction1: this.state.greetingReaction1,
      greetingReaction2: this.state.greetingReaction2,
      greetingReaction3: this.state.greetingReaction3,
      greetingReaction4: this.state.greetingReaction4,
      greetingReaction5: this.state.greetingReaction5,
      greetingReaction6: this.state.greetingReaction6,
      greetingReaction7: this.state.greetingReaction7,
      pettingReaction1: this.state.pettingReaction1,
      pettingReaction2: this.state.pettingReaction2,
      pettingReaction3: this.state.pettingReaction3,
      pettingReaction4: this.state.pettingReaction4,
      pettingReaction5: this.state.pettingReaction5,
      pettingReaction6: this.state.pettingReaction6,
      pettingReaction7: this.state.pettingReaction7,
      pettingReaction8: this.state.pettingReaction8,
      pettingReaction9: this.state.pettingReaction8,
      pettingReaction10: this.state.pettingReaction10,
      playReaction1: this.state.playReaction1,
      playReaction2: this.state.playReaction2,
      playReaction3: this.state.playReaction3,
      playReaction4: this.state.playReaction4,
      playReaction5: this.state.playReaction5,
      holdingReaction1: this.state.holdingReaction1,
      holdingReaction2: this.state.holdingReaction2,
      holdingReaction3: this.state.holdingReaction3,
      holdingReaction4: this.state.holdingReaction,
      holdingReaction5: this.state.holdingReaction5,
      holdingReaction6: this.state.holdingReaction6,
      holdingReaction7: this.state.holdingReaction7,
      holdingReaction8: this.state.holdingReaction8,
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
                initialReaction1= {this.props.initialReaction1}
                initialReaction2= {this.props.initialReaction2}
                initialReaction3= {this.props.initialReaction3}
                initialReaction4= {this.props.initialReaction4}
                greetingReaction1= {this.props.greetingReaction1}
                greetingReaction2= {this.props.greetingReaction2}
                greetingReaction3= {this.props.greetingReaction3}
                greetingReaction4= {this.props.greetingReaction4}
                greetingReaction5= {this.props.greetingReaction5}
                greetingReaction6= {this.props.greetingReaction6}
                greetingReaction7= {this.props.greetingReaction7}
                pettingReaction1= {this.props.pettingReaction1}
                pettingReaction2= {this.props.pettingReaction2}
                pettingReaction3= {this.props.pettingReaction3}
                pettingReaction4= {this.props.pettingReaction4}
                pettingReaction5= {this.props.pettingReaction5}
                pettingReaction6= {this.props.pettingReaction6}
                pettingReaction7= {this.props.pettingReaction7}
                pettingReaction8= {this.props.pettingReaction8}
                pettingReaction9= {this.props.pettingReaction9}
                pettingReaction10= {this.props.pettingReaction10}
                playReaction1= {this.props.playReaction1}
                playReaction2= {this.props.playReaction2}
                playReaction3= {this.props.playReaction3}
                playReaction4= {this.props.playReaction4}
                playReaction5= {this.props.playReaction5}
                holdingReaction1= {this.props.holdingReaction1}
                holdingReaction2= {this.props.holdingReaction2}
                holdingReaction3= {this.props.holdingReaction3}
                holdingReaction4= {this.props.holdingReaction4}
                holdingReaction5= {this.props.holdingReaction5}
                holdingReaction6= {this.props.holdingReaction6}
                holdingReaction7= {this.props.holdingReaction7}
                holdingReaction8= {this.props.holdingReaction8}
                animalOKWithAdults= {this.props.animalOKWithAdults}
                animalOKForSeniors= {this.props.animalOKForSeniors}
                animalOKWithCats= {this.props.animalOKWithCats}
                animalOKWithDogs= {this.props.animalOKWithDogs}
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
