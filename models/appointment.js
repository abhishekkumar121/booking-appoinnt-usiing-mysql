const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Appointment = sequelize.define(
  "Appointment",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    // time: {
    //   type: DataTypes.TIME,
    //   allowNull: false,
    // },
  },
  {
    tableName: "appointments", // Specify the table name
  }
);

module.exports = Appointment;
