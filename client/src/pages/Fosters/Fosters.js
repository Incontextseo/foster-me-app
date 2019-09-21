import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Fosters.css'
import AnimalResult from "../../components/AnimalResult";
import ModalUpdateForm from "../../components/Modal/ModalUpdateForm";
import Button from "../../components/Button";
import ImageUploadForm from "../../components/ImageUploadForm";
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

  deleteAnimal = animalID => {
    API.deleteAnimal(animalID)
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
              animalThumbnailUrl={animal.animalThumbnailUrl}
            />
            <Button 
              onClick={() => this.deleteAnimal(animal.animalID)}
              buttonText="Delete"
              animalID={animal.animalID}
            />
            <ImageUploadForm />

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
