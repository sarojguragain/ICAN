'use strict';
export default (sequelize, DataTypes)=> {
  var User = sequelize.define('User', {
    name:{
      type: DataTypes.STRING,
      default:"Ican User"
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },  
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    status:{
     type:DataTypes.BOOLEAN,
     default:1 
    }
  },{
    deletedAt:'deletedAt',
    paranoid: true,
  });

  User.associate = function(models) {
    User.belongsTo(models.Role);
  };
  return User;
};