const database = require("../module/loginSchema");
const comparepasswordfunction = require("../helper/comparepassword");
const SigninControllers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const finduser = await database.findOne({ email });
    if (email && password) {

      if (finduser) {
        const hashingpassword = finduser.password;
        const comparepassword = await comparepasswordfunction(
          password,
          hashingpassword
        );
        if (comparepassword) {
          const token = await finduser.generatetoken();
          res.cookie("jwttokens", token, {
            secure: true,
            httpOnly: true,
          });
          res.status(200).send("Login Sucessfully");
        } else {
          res.status(401).send("Invalid login details");
        }
      } else {
        res.status(401).send("Invalid login details");
      }
    } else {
      res.status(500).send("All field require");
    }
  } catch (error) {
    res.status(404).send("Some technical issue"+error);
  }
};

module.exports = SigninControllers;
