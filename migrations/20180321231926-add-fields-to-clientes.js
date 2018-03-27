'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Clientes', 'apellido', Sequelize.STRING);
    queryInterface.addColumn('Clientes','email', Sequelize.STRING);

  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Clientes','apellido');
    queryInterface.removeColumn('Clientes','email');
  }
};
