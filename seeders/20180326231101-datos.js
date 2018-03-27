'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clientes',[{
      nombre:'Daniela',
      createdAt:new Date(),
      updatedAt:new Date(),
      apellido:'Garay',
      email:'dani@gmail.com'
    }],{});
},
  

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Clientes',[{
      nombre:'Daniela'
    }])
  }
};
