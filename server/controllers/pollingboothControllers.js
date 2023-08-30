const database = require("../module/pollingboothschema");
const pollingboothControllers = async (req, res) => {
    try {
        const {  pnum, pbname, pcun, win14, firstroundwin, marginper, margin,totalvoters, bjpper, bjpvote, incvote, incvoteper } = req.body;
        if ( pnum&& pbname&& pcun&& win14&& firstroundwin&&totalvoters&& marginper&& margin&& bjpper&& bjpvote&& incvote&& incvoteper) {
            const pnums = await database.findOne({ pnum })
            if (pnums) {
                res.status(400).send('number already exist')

            } else {


                const insertdata = new database({ pnum, pbname, pcun, win14, firstroundwin,totalvoters, marginper, margin, bjpper, bjpvote, incvote, incvoteper });
                await insertdata.save();
                res.status(200).send('Dataadded Sucessfully');

            }
        } else {
            res.status(500).send("All field Require");
        }
    } catch (error) {
        res.status(403).send("Some technical issue" + error);
    }
};
module.exports = pollingboothControllers;
