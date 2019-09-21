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
      console.log("res.data from getCurrentFosters method: ", res.data);
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
              animalThumbnailUrl={animal.animalThumbnailUrl}
            />
            <Button 
              onClick={() => this.deleteAnimal(animal.animalID)}
              buttonText="Delete"
              animalID={animal.animalID}
            />
            <ModalViewProfile
              animalID={animal.animalID}
              animalName={animal.animalName}
              animalGeneralAge={animal.animalGeneralAge}
              animalSex={animal.animalSex}
              animalBreed={animal.animalBreed}
              animalDescriptionPlain={animal.animalDescriptionPlain}
            />
          </div>

        ))}
      </div>
    )
  }
};

export default History