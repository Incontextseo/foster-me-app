module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // animalGeneralAge: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // animalGeneralSizePotential: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
    // animalBreed: {
    //   type: DataTypes.TEXT,
    //   allowNull: true
    // },
    // animalDescriptionPlain: {
    //   type: DataTypes.TEXT,
    //   allowNull: true
    // },
    // animalHouseTrained: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // animalDeclawed: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // animalPictures: {
    //     type: Array(DataTypes.STRING),
    //     allowNull: true
    // }
    // animalThumbnailUrl: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   validate: {
    //     isUrl: true
    //   }
    // },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "current"
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
    paranoid: true,
    underscored: true
    }
  );
  return Animal;
};
