'use strict';
'use direccion';

module.exports = (sequelize, DataTypes) => {
  var Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: {
    	type: DataTypes.STRING,
    	validate: {
    		isEmail:true
    	}
    }
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
    Cliente.hasOne(sequelize.models.Direccion,{foreignKey: 'id_direccion',sourceKey: 'id'})
    Cliente.hasMany(sequelize.models.Venta,{foreignKey:'id_venta',sourceKey:'id'})
  };
  return Cliente;
};