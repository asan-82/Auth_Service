const express=require('express');
const UserController=require("../../controllers/user-controller");
const {AuthRequestValidators}=require("../../middlewares/index");
const router=express.Router();

router.post("/signup",
    AuthRequestValidators.validateUserSignup,
    UserController.create);
router.post("/signin",
    AuthRequestValidators.validateUserSignup,
    UserController.signIn);

router.get("/isAuthenticated",UserController.isAuthenticated);

router.get("/isAdmin",AuthRequestValidators.validateIsUserAdmin,UserController.isAdmin)


module.exports=router;