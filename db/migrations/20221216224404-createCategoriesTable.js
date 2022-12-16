'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('categories',
      {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: Sequelize.STRING
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
