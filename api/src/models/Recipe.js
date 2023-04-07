const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
id: {
  type: DataTypes.UUID,
  primaryKey : true,
  defaultValue: DataTypes.UUIDV4
},
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    dishSummary : {
      type : DataTypes.STRING,
      allowNull : false
    },
    healthScore : {
      type: DataTypes.INTEGER,
    },
    stepByStep : {
      type: DataTypes.STRING
    },
    image: {
      type : DataTypes.STRING
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

// id: {
//   type: DataTypes.UUID,
//   primaryKey : true,
//   defaultValue: DataTypes.UUIDV4
// },


// id: {
//   type: DataTypes.INTEGER,
//   primaryKey : true,
//   autoIncrement: true
// },

