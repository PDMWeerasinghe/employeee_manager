"use strict";

module.exports = function (sequelize, Sequelize) {
  var Employee = sequelize.define("employee", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    number: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.CHAR(10)
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return Employee;
};