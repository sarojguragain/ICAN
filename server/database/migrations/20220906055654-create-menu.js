'use strict';
export default{
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ModuleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Modules',
          key: 'id'
        },
        allowNull: false
      },
      text:{
        type: Sequelize.STRING,
      },
      toolTip:{
        type: Sequelize.STRING,
      },
      orderNo:{
        type: Sequelize.INTEGER,
      },
      url:{
        type: Sequelize.STRING,
      },
      type:{
        type: Sequelize.STRING,
      },
      icon:{
        type: Sequelize.STRING,
      },
      color:{
        type: Sequelize.STRING,
      },
      parentId:{
        type: Sequelize.INTEGER,
      },
      level:{
        type: Sequelize.INTEGER,
      },
      status:{
       type:Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Menus');
  }
};