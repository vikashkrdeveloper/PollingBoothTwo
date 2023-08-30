const express=require('express');
const app =express();
require('dotenv').config();
const port =process.env.PORT||5000;
const router=require('../routes/route');
const cookieparser=require('cookie-parser');
const path=require('path');
const cors=require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser(process.env.SECRET))
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(router);
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})