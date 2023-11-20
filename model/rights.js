const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const rights = sequelize.define("rights", {
    rightsName: {
      type: DataTypes.STRING,
    },
  });
  return rights;
};
