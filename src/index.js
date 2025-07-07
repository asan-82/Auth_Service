const express=require("express");
const { PORT } = require('../src/config/serverConfig');
const apiRoutes=require("./routes/index");
const app=express();

const prepareAndStartServer=()=>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api",apiRoutes);
    app.listen(3001,()=>{
        console.log(`Server Started on ${PORT}`);
    })

}

prepareAndStartServer();