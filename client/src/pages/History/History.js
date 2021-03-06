import React from 'react';
import './History.css';
import AnimalResult from "../../components/AnimalResult";
import Button from "../../components/Button";
import ModalViewProfile from "../../components/Modal/ModalViewProfile";
import API from "../../utils/API";

class History extends React.Component {
  state = {
    animals: []
  };

  loadPastFosters = () => {
    API.getPastFosters()
    .then(res => {
      console.log("res.data from getPastFosters method: ", res.data)
      this.setState({animals: res.data})
    })
    .catch(err => console.log(err))
  };

  // Lifecycle method runs loadCurrentFosters
  componentDidMount() {
    this.loadPastFosters();
  };

  deleteAnimal = animalID => {
    API.deleteAnimal(animalID)
    .then(API.getPastFosters()
    .then(res => {
      console.log("res.data from getPastFosters method: ", res.data);
      this.setState({animals: res.data})
    })
    )
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <h1>Your Past Fosters</h1>
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
            />
            <Button 
              onClick={() => this.deleteAnimal(animal.animalID)}
              buttonText="Delete"
              animalID={animal.animalID}
            />
            <ModalViewProfile
              animalID = {animal.animalID}
              animalName = {animal.animalName} 
              animalSpecies = {animal.animalSpecies} 
              animalGeneralAge= {animal.animalGeneralAge} 
              animalSex= {animal.animalSex}
              animalBreed= {animal.animalBreed}
              fosterReason= {animal.fosterReason}
              animalHouseTrained= {animal.animalHouseTrained}
              interactWithChildren= {animal.interactWithChildren}
              interactWithPets= {animal.interactWithPets}
              interactionComments= {animal.interactionComments}
              initialReaction= {animal.initialReaction}
              greetingReaction= {animal.greetingReaction}
              pettingReaction= {animal.pettingReaction}
              playReaction= {animal.playReaction}
              holdingReaction= {animal.holdingReaction}
              animalOKWithKids= {animal.animalOKWithKids}
              animalOKWithAdults= {animal.animalOKWithAdults}
              animalOKForSeniors= {animal.animalOKForSeniors}
              animalOKWithCats= {animal.animalOKWithCats}
              animalOKWithDogs= {animal.animalOKWithDogs}
              animalDescriptionPlain= {animal.animalDescriptionPlain}
              animalProfile={animal.animalProfile}
            />
          </div>

        ))}
      </div>
    )
  }
};

export default History