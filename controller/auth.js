const { user } = require("../model");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    let { name, password } = req.body;
    let USER = await user.findOne({ where: { name, password } });
    if (!USER) {
      return res.status(400).json({ error: "No User Found" });
    }
    let token = await jwt.sign({ id: USER.id }, "vignesh", { expiresIn: "3d" });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong" });
  }
};

const getUser = async (req, res) => {
  try {
    let id = req.id;
    let USER = await user.findByPk(id);
    // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(USER)));
    res.status(200).json(USER);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  login,
  getUser,
};
