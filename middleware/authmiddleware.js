const jwt = require("jsonwebtoken");
const { user } = require("../model");

async function decodeJWTTokenMiddleware(req, res, next) {
  var token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, "vignesh");
      req.id = decode.id;

      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "not authorized" });
  }

  if (!token) {
    return res.status(401).json({ message: "no token passed" });
  }
}

const authorization = (role, rights) => {
  if (role) {
    return async (req, res, next) => {
      try {
        let id = req.id;
        let USER = await user.findByPk(id);
        let roles = await USER.getRole();
        console.log(roles.roleName);
        if (roles.roleName != role) {
          return res.status(400).json({ error: "Invalid Role" });
        }
        let Rights;
        if (rights) {
          //   console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(roles)));

          let RIGHTS = await roles.getRights();
          Rights = RIGHTS.map((e) => {
            return e.rightsName;
          });

          if (!Rights.includes(rights)) {
            return res.status(400).json({ error: "Invalid Rights" });
          }
        }
        next();
      } catch (error) {
        res.status(500).json({ error: "error" });
      }
    };
  }
  return async (req, res, next) => {
    next();
  };
};
module.exports = {
  decodeJWTTokenMiddleware,
  authorization,
};
