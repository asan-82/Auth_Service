const validateUserSignup=(req,res,next)=>{
    if(!req.body.email||!req.body.password)
    {
        return res.status(400).json({
      data:{} ,
      success: true,
      message: "Something went wrong",
      err: 'Email or Password missing in the request',
    });
    }
next();
}

module.exports={
    validateUserSignup
}