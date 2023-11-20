const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const role = sequelize.define("role", {
    roleName: {
      type: DataTypes.STRING,
    },
  });
  return role;
};
