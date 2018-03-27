'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venta = sequelize.define('Venta', {
    fecha: DataTypes.DATE,
  }, {});
  Venta.associate = function(models) {
    // associations can be defined here
    Venta.belongsTo(sequelize.models.Cliente)
    Venta.belongsTo(sequelize.models.Vendedor)
    Venta.hasMany(sequelize.models.Libro, {foreignKey: 'id_libro',sourceKey:'id'})
  };
  return Venta;
};