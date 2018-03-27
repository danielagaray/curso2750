'use strict';
module.exports = (sequelize, DataTypes) => {
  var Direccion = sequelize.define('Direccion', {
    nombreCalle: DataTypes.STRING,
    numero:DataTypes.INTEGER,
    ciudad:DataTypes.STRING,
    pais:DataTypes.STRING,

  }, {});
  Direccion.associate = function(models) {
    // associations can be defined here

  };
  return Direccion;
};