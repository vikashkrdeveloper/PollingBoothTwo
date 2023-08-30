const database = require('../module/loginSchema');
const addAdminControllers = async (req, res) => {
    try {
        const id = req.params.id;
        const { role } = req.body;
        await database.updateOne({ _id: id }, { role });
        res.status(200).send('Add admin sucessfully');


    }
    catch (error) {
        res.status(404).send('Some technical issue')
    }
}
module.exports = addAdminControllers;