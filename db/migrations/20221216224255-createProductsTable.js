'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    /*
    products
    id, name, price, description
    */
    await queryInterface.createTable('products',
      {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: Sequelize.STRING,
        price: Sequelize.FLOAT,
        description: Sequelize.TEXT
      }
    );

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
