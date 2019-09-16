import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Fosters.css'
import AnimalResult from "../../components/AnimalResult";
import ModalUpdateForm from "../../components/Modal/ModalUpdateForm";
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
              animalThumbnailUrl={animal.animalThumbnailUrl}
              // onClick={() => this.updateAnimal(animal.animalID)}
              // buttonText="Update foster info"
            />
            <ModalUpdateForm 
              animalID={animal.animalID}
              animalName={animal.animalName}
              animalGeneralAge={animal.animalGeneralAge}
              animalSex={animal.animalSex}
              animalBreed={animal.animalBreed}
            />
          </div>

        ))}
      </div>
    )
  }
};

// function Fosters() {
//   return (
//     <div>
//         Hello World! - View Your Current Fosters!
//         <Animals />
//     </div>
//   );
// }

export default Fosters
