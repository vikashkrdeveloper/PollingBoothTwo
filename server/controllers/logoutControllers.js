const logoutControllers=(req,res)=>{
res.clearCookie('jwttokens',{path:'/'});
res.status(200).send('Logout Sucessfully');
}

module.exports=logoutControllers;