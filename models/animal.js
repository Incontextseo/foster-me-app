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
    urlSecureFullsize: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
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
      defaultValue: ""
    },
    interactWithPets: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    interactionComments: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    initialReaction1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    initialReaction2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    initialReaction3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    initialReaction4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction5: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction6: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    greetingReaction7: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction5: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction6: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction7: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction8: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction9: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    pettingReaction10: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    playReaction1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    playReaction2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    playReaction3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    playReaction4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    playReaction5: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction5: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction6: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction7: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    holdingReaction8: {
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
