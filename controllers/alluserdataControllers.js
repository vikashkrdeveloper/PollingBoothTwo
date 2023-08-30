const database = require("../module/loginSchema");
const alluserdataControllers = async (req, res) => {
  try {
    const findalluser = await database.find();
    res.status(200).send(findalluser);
  } catch (error) {
    res.status(399).send("Some technical issue");
  }
};
module.exports = alluserdataControllers;
