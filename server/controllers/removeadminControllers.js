const database = require("../module/loginSchema");
const removeadminControllers = async (req, res) => {
  try {
    const id = req.params.id;
    const { role } = req.body;
    await database.updateOne({ _id: id }, { role });
    res.status(200).send();
  } catch (error) {
    console.log("Some technical issue" + error);
    res.status(404).send("Some technical issue");
  }
};
module.exports = removeadminControllers;
