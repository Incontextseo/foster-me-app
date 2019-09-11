import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import Filter from '../../components/Filter';
import Animals from '../../components/Animals';

class Search extends React.Component {
  state = {
    animals: [],
    searchZip: "",
    animalType: "",
  };

  handleInputChange = event => {
    this.setState({searchZip: event.target.value});
  };

  handleSelectionChange = event => {
    this.setState({animalType: event.target.value});
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getAnimals(this.state.searchZip, this.state.animalType)
    .then( results => {

      // RescueGroups.org API returns results as object instead of array so loop through results & push to array so map function works
      let details = [];

      for (var i in results.data) {
          details.push({ name: i, value: results.data[i] });
      }

      this.setState({ animals: details })
      console.log({ animals: details });
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Filter
          handleInputChange={this.handleInputChange}
          handleSelectionChange={this.handleSelectionChange}
          handleFormSubmit={this.handleFormSubmit} 
          searchZip={this.searchZip}
          animalType={this.animalType}
        />

        {this.state.animals.map(animal => (
          <div className="container" key={animal.value.animalID}>
            <Animals 
              animalID={animal.value.animalID}
              animalName={animal.value.animalName}
              animalGeneralAge={animal.value.animalGeneralAge}
              animalGeneralSizePotential={animal.value.animalGeneralSizePotential}
              animalDescriptionPlain={animal.value.animalDescriptionPlain}
              animalThumbnailUrl={animal.value.animalThumbnailUrl}
            //   onClick={() => this.saveAnimal(animal.animalID)}
              buttonText="Foster me"
            />

          </div>

        ))}
      </div>

    );
  };
};

export default Search