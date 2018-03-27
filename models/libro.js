'use strict';
module.exports = (sequelize, DataTypes) => {
  var Libro = sequelize.define('Libro', {
    nombre: DataTypes.STRING
  }, {});
  Libro.associate = function(models) {
    Libro.belongsTo(sequelize.models.Venta)
  };
  return Libro;
};