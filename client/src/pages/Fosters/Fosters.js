import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Fosters.css'
import AnimalResult from "../../components/AnimalResult";
import ModalUpdateForm from "../../components/Modal/ModalUpdateForm";
import Button from "../../components/Button";
// import ImageUploadForm from "../../components/ImageUploadForm";
import API from '../../utils/API';

class Fosters extends React.Component {
  state = {
    animals: []
  };

  loadCurrentFosters = () => {
    API.getCurrentFosters()
    .then(res => {
      console.log("res.data from getCurrentFosters method: ", res.data)
      this.setState({animals: res.data})
    })
    .catch(err => console.log(err))
  };

  // Lifecycle method runs loadCurrentFosters
  componentDidMount() {
    this.loadCurrentFosters();
  };

  returnAnimal = animalID => {
    API.returnAnimal({animalID, fosterStatus: "returned"})
    .then(API.getCurrentFosters()
    .then(res => {
      console.log("res.data from getCurrentFosters method: ", res.data);
      this.setState({animals: res.data})
    })
    )
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <h1>Your Current Fosters</h1>
        {this.state.animals.map(animal => (
          <div className="container" key={animal.animalID}>
            <AnimalResult
              animalID={animal.animalID}
              animalName={animal.animalName}
              animalGeneralAge={animal.animalGeneralAge}
              animalGeneralSizePotential={animal.animalGeneralSizePotential}
              animalDescriptionPlain={animal.animalDescriptionPlain}
              animalBreed={animal.animalBreed}
              urlSecureFullsize={animal.urlSecureFullsize}
              fosterReason={animal.fosterReason}
            />
            <Button 
              onClick={() => this.returnAnimal(animal.animalID)}
              buttonText="Return"
              animalID={animal.animalID}
            />
            <ModalUpdateForm
              animalID={animal.animalID}
              animalName={animal.animalName}
              animalGeneralAge={animal.animalGeneralAge}
              fosterReason={animal.fosterReason}
              animalSex={animal.animalSex}
              animalBreed={animal.animalBreed}
              animalDescriptionPlain={animal.animalDescriptionPlain}
              animalHouseTrained= {animal.animalHouseTrained}
              interactWithChildren= {animal.interactWithChildren}
              interactWithPets= {animal.interactWithPets}
              interactionComments={animal.interactionComments}
              initialReaction1= {animal.initialReaction1}
              initialReaction2= {animal.initialReaction2}
              initialReaction3= {animal.initialReaction3}
              initialReaction4= {animal.initialReaction4}
              greetingReaction1= {animal.greetingReaction1}
              greetingReaction2= {animal.greetingReaction2}
              greetingReaction3= {animal.greetingReaction3}
              greetingReaction4= {animal.greetingReaction4}
              greetingReaction5= {animal.greetingReaction5}
              greetingReaction6= {animal.greetingReaction6}
              greetingReaction7= {animal.greetingReaction7}
              pettingReaction1= {animal.pettingReaction1}
              pettingReaction2= {animal.pettingReaction2}
              pettingReaction3= {animal.pettingReaction3}
              pettingReaction4= {animal.pettingReaction4}
              pettingReaction5= {animal.pettingReaction5}
              pettingReaction6= {animal.pettingReaction6}
              pettingReaction7= {animal.pettingReaction7}
              pettingReaction8= {animal.pettingReaction8}
              pettingReaction9= {animal.pettingReaction9}
              pettingReaction10= {animal.pettingReaction10}
              playReaction1= {animal.playReaction1}
              playReaction2= {animal.playReaction2}
              playReaction3= {animal.playReaction3}
              playReaction4= {animal.playReaction4}
              playReaction5= {animal.playReaction5}
              holdingReaction1= {animal.holdingReaction1}
              holdingReaction2= {animal.holdingReaction2}
              holdingReaction3= {animal.holdingReaction3}
              holdingReaction4= {animal.holdingReaction4}
              holdingReaction5= {animal.holdingReaction5}
              holdingReaction6= {animal.holdingReaction6}
              holdingReaction7= {animal.holdingReaction7}
              holdingReaction8= {animal.holdingReaction8}
              animalOKWithKids= {animal.animalOKWithKids}
              animalOKWithAdults= {animal.animalOKWithAdults}
              animalOKForSeniors= {animal.animalOKForSeniors}
              animalOKWithCats= {animal.animalOKWithCats}
              animalOKWithDogs= {animal.animalOKWithDogs}
              animalProfile={animal.animalProfile}
            />
          </div>

        ))}
      </div>
    )
  }
};

export default Fosters
