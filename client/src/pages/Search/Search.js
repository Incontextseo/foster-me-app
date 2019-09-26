import React from "react";
import SearchForm from "../../components/SearchForm";
import AnimalResult from "../../components/AnimalResult";
import Button from "../../components/Button";
import API from "../../utils/API";
import ModalViewProfile from "../../components/Modal/ModalViewProfile";

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

      console.log(results);

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
    console.log("Save animal button clicked")
    const animal = this.state.animals.find(animal => animal.value.animalID === animalID);
    API.saveAnimal({
      animalID: animal.value.animalID,
      animalName: animal.value.animalName,
      animalGeneralAge: animal.value.animalGeneralAge,
      animalGeneralSizePotential: animal.value.animalGeneralSizePotential,
      animalDescriptionPlain: animal.value.animalDescriptionPlain,
      animalThumbnailUrl: animal.value.animalThumbnailUrl,
      urlSecureFullsize: animal.value.animalPictures[0].urlSecureFullsize,
      animalHouseTrained: animal.value.animalHouseTrained,
      animalDeclawed: animal.value.animalDeclawed,
      animalSpecies: this.state.animalType,
      animalLocation: animal.value.animalLocation,
      animalSex: animal.value.animalSex,
      animalBreed: animal.value.animalBreed,
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
        <div className="col-12 text-center">
            <h1>SEARCH AVAILABLE ANIMALS</h1>
        </div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleSelectionChange={this.handleSelectionChange}
          handleFormSubmit={this.handleFormSubmit} 
          searchZip={this.searchZip}
          animalType={this.animalType}
        />
        
        {this.state.animals.map(animal => {
          let urlSecureFullsize;
          if (animal.value.animalPictures[0]) {
            urlSecureFullsize = animal.value.animalPictures[0].urlSecureFullsize;
          }
           else {
            urlSecureFullsize = animal.value.animalThumbnailUrl;
           } 
          return (
            <div className="container" key={animal.value.animalID}>
                <AnimalResult 
                  animalID={animal.value.animalID}
                  animalName={animal.value.animalName}
                  animalGeneralAge={animal.value.animalGeneralAge}
                  animalGeneralSizePotential={animal.value.animalGeneralSizePotential}
                  animalDescriptionPlain={animal.value.animalDescriptionPlain}
                  animalBreed={animal.value.animalBreed}
                  urlSecureFullsize={urlSecureFullsize}
                />
                <Button 
                  onClick={() => this.saveAnimal(animal.value.animalID)}
                  buttonText="Foster me"
                  animalID={animal.value.animalID}
                />​
                <ModalViewProfile
                  animalID={animal.animalID}
                  animalName={animal.animalName}
                  animalGeneralAge={animal.animalGeneralAge}
                  fosterReason={animal.fosterReason}
                  animalSex={animal.animalSex}
                  animalBreed={animal.animalBreed}
                  animalDescriptionPlain={animal.animalDescriptionPlain}
                  animalHouseTrained= {animal.animalHouseTrained}
                />
            </div>
  
          )
        }
        )
        
        }
      </div>
    );
  };
};

export default Search;