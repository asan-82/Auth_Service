const express=require("express");
const { PORT, JWT_KEY } = require('../src/config/serverConfig');
const apiRoutes=require("./routes/index");
const UserService=require("../src/services/user-service");
const { verify } = require("jsonwebtoken");
const app=express();

const prepareAndStartServer=()=>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api",apiRoutes);
    
    app.listen(3001,()=>{
        console.log(`Server Started on ${PORT}`);
      /*  const service=new UserService();
    const newToken=service.createToken({email:"aarushi@admin.com",id:1});
   // console.log(newToken);
const response=verify(newToken,JWT_KEY);
console.log(response);
*/    
})

}

prepareAndStartServer();