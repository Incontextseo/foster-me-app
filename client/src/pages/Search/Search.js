import React from "react";
import SearchForm from "../../components/SearchForm";
import AnimalResult from "../../components/AnimalResult";
import Button from "../../components/Button";
import API from "../../utils/API";
<<<<<<< HEAD
import ModalViewProfile from "../../components/Modal/ModalViewProfile";
=======
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b

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

<<<<<<< HEAD
      console.log(results);

=======
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
      // RescueGroups.org API returns results as object instead of array 
      //so loop through results & push to array so map function works
      let details = [];

      for (var i in results.data) {
          details.push({ name: i, value: results.data[i] });
      }

      this.setState({ animals: details })
      console.log({ animals: details });
    })
    .catch(err => console.log("error: ", err));
  };

  saveAnimal = animalID => {
<<<<<<< HEAD
    console.log("Save animal button clicked")
=======
    console.log("Save animal button clicked ")
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
    const animal = this.state.animals.find(animal => animal.value.animalID === animalID);
    API.saveAnimal({
      animalID: animal.value.animalID,
      animalName: animal.value.animalName,
      animalGeneralAge: animal.value.animalGeneralAge,
      animalGeneralSizePotential: animal.value.animalGeneralSizePotential,
      animalDescriptionPlain: animal.value.animalDescriptionPlain,
      animalThumbnailUrl: animal.value.animalThumbnailUrl,
      animalHouseTrained: animal.value.animalHouseTrained,
      animalDeclawed: animal.value.animalDeclawed,
      animalSpecies: this.state.animalType,
      animalLocation: animal.value.animalLocation,
      animalSex: animal.value.animalSex,
      fosterStatus: "current",
    }).then(() => {
      this.setState({
        animals: this.state.animals.filter(animal => animal.value.animalID !== animalID)
      });
    }).catch(err => console.log(err));
  };


  render() {
    return (
      <div>
<<<<<<< HEAD
        <div className="col-12 text-center">
            <h1>SEARCH AVAILABLE ANIMALS</h1>
        </div>
=======
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleSelectionChange={this.handleSelectionChange}
          handleFormSubmit={this.handleFormSubmit} 
          searchZip={this.searchZip}
          animalType={this.animalType}
        />
        
        {this.state.animals.map(animal => (
          <div className="container" key={animal.value.animalID}>
<<<<<<< HEAD
              <AnimalResult 
                animalID={animal.value.animalID}
                animalName={animal.value.animalName}
                animalGeneralAge={animal.value.animalGeneralAge}
                animalGeneralSizePotential={animal.value.animalGeneralSizePotential}
                animalDescriptionPlain={animal.value.animalDescriptionPlain}
                animalThumbnailUrl={animal.value.animalThumbnailUrl}
              />
              <Button 
                onClick={() => this.saveAnimal(animal.value.animalID)}
                buttonText="Foster me"
                animalID={animal.value.animalID}
              />​
              <ModalViewProfile
                animalID={animal.value.animalID}
                animalName={animal.value.animalName}
                animalGeneralAge={animal.value.animalGeneralAge}
                animalSex={animal.value.animalSex}
                animalBreed={animal.value.animalBreed}
                animalDescriptionPlain={animal.value.animalDescriptionPlain}
              />
=======
            <AnimalResult 
              animalID={animal.value.animalID}
              animalName={animal.value.animalName}
              animalGeneralAge={animal.value.animalGeneralAge}
              animalGeneralSizePotential={animal.value.animalGeneralSizePotential}
              animalDescriptionPlain={animal.value.animalDescriptionPlain}
              animalThumbnailUrl={animal.value.animalThumbnailUrl}
              // handleAnimalClick={this.saveAnimal}
              // buttonText="Foster me"
            />
            <Button 
              // handleAnimalClick={this.saveAnimal}
              onClick={() => this.saveAnimal(animal.value.animalID)}
              buttonText="Foster me"
              animalID={animal.value.animalID}
            />

>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
          </div>

        ))}
      </div>
<<<<<<< HEAD
=======

>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
    );
  };
};

export default Search;