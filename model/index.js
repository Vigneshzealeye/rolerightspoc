const { dbconnection } = require("../config/dbconfig");

const user = require("../model/user")(dbconnection);
const rights = require("../model/rights")(dbconnection);
const role = require("../model/role")(dbconnection);

role.hasMany(user, { foreignKey: "roleId" });
user.belongsTo(role, { foreignKey: "roleId" });

role.belongsToMany(rights, { through: "rolerights" });
rights.belongsToMany(role, { through: "rolerights" });

module.exports = {
  dbconnection,
  user,
  rights,
  role,
};
