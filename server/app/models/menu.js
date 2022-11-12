'use strict';
export default (sequelize, DataTypes)=> {
  var Menu = sequelize.define('Menu', {
    text:{
      type: DataTypes.STRING,
    },
    toolTip:{
      type: DataTypes.STRING,
    },
    orderNo:{
      type: DataTypes.INTEGER,
    },
    url:{
      type: DataTypes.STRING,
    },
    type:{
      type: DataTypes.STRING,
    },
    icon:{
      type: DataTypes.STRING,
    },
    color:{
      type: DataTypes.STRING,
    },
    parentId:{
      type: DataTypes.INTEGER,
    },
    level:{
      type: DataTypes.INTEGER,
    },
    status:{
     type:DataTypes.BOOLEAN,
    }
  });

  Menu.associate = function(models) {
    Menu.belongsTo(models.Module);
  };
  return Menu;
};