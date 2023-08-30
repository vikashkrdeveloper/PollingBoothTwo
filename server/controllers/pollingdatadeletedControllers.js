const database=require('../module/pollingboothschema');
const pollingdatadeletedControllers=async (req,res)=>{
try{
    const id=req.params.id;
    await database.deleteOne({_id:id});
    res.status(200).send()
}
catch(error){
    res.status(400).send('Som technical issue')
}
}
module.exports=pollingdatadeletedControllers;