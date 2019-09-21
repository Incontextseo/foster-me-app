import React from 'react';
import './History.css';
import AnimalResult from "../../components/AnimalResult";
import API from '../../utils/API';

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

          </div>

        ))}
      </div>
    )
  }
};

export default History