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

module.exports=router;