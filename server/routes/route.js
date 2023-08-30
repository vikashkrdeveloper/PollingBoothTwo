const express = require("express");
const route = express.Router();
const homeControllers = require("../controllers/homeControllers");
const errorpagecontrollers = require("../controllers/errorpagecontrollers");
const signupControllers=require('../controllers/signupControllers');
const signinControllers=require('../controllers/SigninControllers');
const userauthControllers=require('../controllers/userauthControllers')
const userauthmiddleware=require('../middleware/userauthmiddleware')
const logoutControllers=require('../controllers/logoutControllers');
const alluserdataControllers=require('../controllers/alluserdataControllers');
const removeadminControllers=require('../controllers/removeadminControllers');
const pollingboothControllers=require('../controllers/pollingboothControllers');
const pollingboothshowControllers=require('../controllers/pollingboothshowControllers');
const pollingdatadeletedControllers=require('../controllers/pollingdatadeletedControllers')
const addAdminControllers=require('../controllers/addAdminControllers')
route.get("/", homeControllers);
route.get("/alluser/data", alluserdataControllers);
route.get("/logout", logoutControllers);
route.get("/pollingboothdata/show", pollingboothshowControllers);
route.get("/user/auth",userauthmiddleware, userauthControllers);
route.post("/user/signup", signupControllers);
route.post("/pollingbooth/add", pollingboothControllers);
route.post("/user/login", signinControllers);
route.post("/removeadmin/:id", removeadminControllers);
route.post("/addadmin/:id", addAdminControllers);
route.delete("/polling/datadelete/:id",pollingdatadeletedControllers);
route.all("*", errorpagecontrollers);

module.exports = route;
