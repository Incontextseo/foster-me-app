import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import Filter from '../../components/Filter';
import Animals from '../../components/Animals';
import API from '../../utils/API';


function Search() {
  return (
    <div>
        Hello World! - Search Available Fosters!
        <Filter />
        <Animals />
    </div>
  );
}

export default Search

  handleFormSubmit = event => {
    event.preventDefault();

    API.getAnimals(this.state.searchZip, this.state.animalType)
    .then( results => {

      // RescueGroups.org API returns results as object instead of array 
      //so loop through results & push to array so map function works
      let details = [];

      for (var i in results.data) {
          details.push({ name: i, value: results.data[i] });
      }

      this.setState({ animals: details })
      console.log({ animals: details });
    })
    .catch(err => console.log(err));
  };

  saveAnimal = animalID => {
    console.log("Save animal button clicked")
    const animal = this.state.animals.find(animal => animal.animalID === animalID);
    API.saveAnimal({
      animalID: animal.value.animalID,
      animalName: animal.value.animalName,
      animalGeneralAge: animal.value.animalGeneralAge,
      animalGeneralSizePotential: animal.value.animalGeneralSizePotential,
      animalDescriptionPlain: animal.value.animalDescriptionPlain,
      animalThumbnailUrl: animal.value.animalThumbnailUrl,
      animalHouseTrained: animal.value.animalHouseTrained,
      animalDeclawed: animal.value.animalDeclawed,
      fosterStatus: "current"
    }).then(() => {
      this.setState({
        animals: this.state.animals.filter(animal => animal.animalID !== animalID)
      });
    }).catch(err => console.log(err));
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
              onClick={() => {
                console.log("clicked?");
                this.saveAnimal(animal.value.animalID)
              }}
              buttonText="Foster me"
            />

          </div>

        ))}
      </div>

    );
  };
};

export default Search
