const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("booking", "root", "Abhi12345@#$", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
