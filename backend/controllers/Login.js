const User = require("../models/user");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const Login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Invalid username or password");
  const validPassword = await user.verifyPassword(password);
  if (!validPassword)
    return res.status(400).send("Invalid username or password");
  const token = jwt.sign({ userID: user.id, access: user.access }, "exammoduletrail12253");
  res.send({ token });
};

module.exports = Login;