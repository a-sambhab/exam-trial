const User = require("../models/user");

const getUserAccess = async (req, res) => {
  const user = await User.findOne({ username: req.query.username });
  //   console.log(req.query)
  if (!user) return res.status(400).send("user not found");
  return res.status(200).send({ access: user.access });
};

module.exports = getUserAccess;
