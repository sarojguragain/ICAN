"use strict";

export default (sequelize, DateTypes) => {
  var Category = sequelize.define(
    "Category",
    {
      category_name: {
        type: DateTypes.STRING,
        allowNull: false,
        unique: true,
      },
      category_name_np: {
        type: DateTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DateTypes.BOOLEAN,
        default: true,
      },
    },
    {
      deletedAt: "deletedAt",
      paranoid: true,
    }
  );
  return Category;
};
