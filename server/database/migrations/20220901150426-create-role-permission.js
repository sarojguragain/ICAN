'use strict';
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolePermissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RoleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Roles',
          key: 'id'
        },
        allowNull: false
      },
      PermissionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Permissions',
          key: 'id'
        },
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        default:1
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RolePermissions');
  }
};