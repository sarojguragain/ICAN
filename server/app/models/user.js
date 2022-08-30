'use strict';
import { Sequelize, DataTypes, Model } from 'Sequelize';

export default(sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   username: {
     type:DataTypes.STRING,
     allowNull:false,
     unique:true
   },
   email:{
     type:DataTypes.STRING,
     allowNull:true,
     unique:true
   },
   phone:{
     type:DataTypes.STRING,
     allowNull:true,
     unique:true
   },
   password: {
     type:DataTypes.STRING,
     allowNull:false,
   }
 }, {
   sequelize,
   modelName: 'User',
 });
 return User;
};