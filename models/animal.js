module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
    animalID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    animalSpecies: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    animalLocation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    animalSex: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    animalName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    animalGeneralAge: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
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
    },
    fosterStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "current"
    },
    fosterReason: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    interactWithChildren: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No"
    },
    interactWithPets: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No"
    },
    interactionComments: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    initialReaction: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    playReaction: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    animalOKWithKids: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    animalOKWithAdults: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    animalOKForSeniors: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    animalOKWithCats: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    animalOKWithDogs: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    animalProfile: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    // deletedAt: DataTypes.DATE
    },  
    // {
    // paranoid: true
    // }
  );
  return Animal;
};
