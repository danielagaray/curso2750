'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Vendedores','apellido',Sequelize.STRING);
    queryInterface.addColumn('Vendedores','email',Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Vendedores','apellido')
    queryInterface.removeColumn('Vendedores','email')
  }
};
