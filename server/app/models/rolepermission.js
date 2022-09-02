'use strict';
export default (sequelize, DataTypes)=> {
  var Permission = sequelize.define('Permission', {
 
    permission:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },  
    description:{
      type:DataTypes.STRING,
    },
    status:{
      type:DataTypes.BOOLEAN,
      default:1 
     }
  });
  Permission.associate = function (models) {
    Permission.belongsToMany(models.Role, { through: 'RolePermission', as: 'Role' });
  };
  return Permission;
};