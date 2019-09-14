module.exports = function(sequelize, DataTypes) {
    var Foster = sequelize.define("Foster", {
      fosterID: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      fosterName: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: ""
      },
      fosterPassword: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
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
    return Foster;
  };