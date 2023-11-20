const { Sequelize } = require("sequelize");

const dbconnection = new Sequelize("rolerights", "postgres", "12345678", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = {
  dbconnection,
};
