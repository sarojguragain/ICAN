'use strict';
export default (sequelize, DataTypes)=> {
  var Role = sequelize.define('Role', {
 
    role:{
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
  },{
    deletedAt:'deletedAt',
    paranoid: true,
  });
  Role.associate = function (models) {
    Role.hasMany(models.User);
    Role.belongsToMany(models.Permission, { through: 'RolePermission', as: 'Permission' });

  };
  return Role;
};
