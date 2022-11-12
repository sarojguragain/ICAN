'use strict';
export default (sequelize, DataTypes)=> {
  var Module = sequelize.define('Module', {
 
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    status:{
      type:DataTypes.BOOLEAN,
      default:1 
     }
  });
  Module.associate = function (models) {
    Module.hasMany(models.Menu);
  };
  return Module;
};
