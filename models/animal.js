module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
    animalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    animalSpecies: {
        type: DataTypes.STRING,
        allowNull: false
    },
    animalLocation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    animalSex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    animalName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    animalGeneralAge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    animalGeneralSizePotential: {
        type: DataTypes.STRING,
        allowNull: true
    },
    animalBreed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    animalDescriptionPlain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    animalHouseTrained: {
      type: DataTypes.STRING,
      allowNull: true
    },
    animalDeclawed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // animalPictures: {
    //     type: Array(DataTypes.STRING),
    //     allowNull: true
    // }
    animalThumbnailUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  });
  return Animal;
};
