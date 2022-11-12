'use strict';

export default{
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn(
      'Users',
      'deletedAt',
      {
          allowNull: true,
          type: Sequelize.DATE
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn('Users', 'deletedAt')
  }
};
