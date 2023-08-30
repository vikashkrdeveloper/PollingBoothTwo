const database=require('../module/pollingboothschema');
const pollingboothshowControllers=async (req,res)=>{
try{
    const alldata=await database.find();
    res.status(200).send(alldata);

}
catch(error){

}
}
module.exports=pollingboothshowControllers;