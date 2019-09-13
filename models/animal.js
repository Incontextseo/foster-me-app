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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updated_at:  {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    deleted_at: DataTypes.DATE
    },  
    {
    paranoid: true
    }
  );
  return Animal;
};
