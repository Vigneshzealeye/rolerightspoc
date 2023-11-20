const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const user = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  return user;
};
