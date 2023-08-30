const database = require("../module/loginSchema");
const hashingpasswordfunction = require("../helper/hash");
const signupControllers = async (req, res) => {
  try {
    const { email, name, password, phone, username } = req.body;
    if (email && password && name && username && phone) {
      const finddata = await database.findOne({ email });
      const findphone = await database.findOne({ phone });
      const findusername = await database.findOne({ username });
      if (finddata) {
        res.status(400).send("Email id already exist");
      }
      else {
        if (findusername) {
          res.status(401).send("Username already exist");
        } else {
          if (findphone) {
            res.status(402).send("Phone id already exist");
          } else {
            const hashpassword = await hashingpasswordfunction(password);
            const insert = new database({
              name,
              email,
              password: hashpassword,
              username,
              phone
            });
            await insert.save();
            res.send("Sucess");
          }
        }
      }
    } else {
      res.status(500).send("All field require");
    }
  } catch (error) {
    res.status(404).send("Some technical issue" + error);
  }
};
module.exports = signupControllers;
