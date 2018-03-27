'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Direcciones','numero',Sequelize.INTEGER)
    queryInterface.addColumn('Direcciones','ciudad',Sequelize.STRING)
    queryInterface.addColumn('Direcciones','pais',Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Direcciones','numero')
    queryInterface.removeColumn('Direcciones','ciudad')
    queryInterface.removeColumn('Direcciones','pais')
  }
};
