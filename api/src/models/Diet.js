const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('diet', {
   id: {
         type: DataTypes.UUID,
         primaryKey : true,
         defaultValue: DataTypes.UUIDV4
       },
 name: {
         type : DataTypes.STRING,
       },
createInDb : {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true
            }
      },
      { timestamps: false }
      );
  };


