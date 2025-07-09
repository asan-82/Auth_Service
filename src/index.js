const express=require("express");
const { PORT, JWT_KEY } = require('../src/config/serverConfig');
const apiRoutes=require("./routes/index");
const UserService=require("../src/services/user-service");
const db=require("../src/models/index");
const {User,Role}=require("../src/models/index");
const { verify } = require("jsonwebtoken");
const app=express();

const prepareAndStartServer=()=>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api",apiRoutes);
    
    app.listen(3001,async ()=>{
        console.log(`Server Started on ${PORT}`);
       /* if(process.env.DB_SYNC)
        {
          db.sequelize.sync({alter:true});
        }
          */
       //  const u=await User.findByPk(3);
        // const r=await Role.findByPk(1);
        // u.addRole(r);
      /*  const service=new UserService();
    const newToken=service.createToken({email:"aarushi@admin.com",id:1});
   // console.log(newToken);
const response=verify(newToken,JWT_KEY);
console.log(response);
*/    
})

}

prepareAndStartServer();