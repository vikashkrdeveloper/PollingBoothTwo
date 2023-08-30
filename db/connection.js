const mongoose=require('mongoose');
const databaseaddress=process.env.DATABASE_ADDRESS;
const connectdatabase=mongoose.connect(databaseaddress);
connectdatabase.then(()=>{
    console.log('Connected Database');
})
.catch(()=>{
    console.log('Not Connected Database');

})

module.exports=mongoose;