'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vendedor = sequelize.define('Vendedor', {
    nombre: DataTypes.STRING,
    apellido:DataTypes.STRING,
    email: {
    	type: DataTypes.STRING,
    	validate: {
    		isEmail:true
    	}
    }
  }, {});
  Vendedor.associate = function(models) {
    Vendedor.hasMany(sequelize.models.Venta,{foreignKey:'id_venta',sourceKey:'id'})
    Vendedor.hasOne(sequelize.models.Direccion,{foreignKey:'id_direccion',sourceKey:'id'})
  };
  return Vendedor;
};