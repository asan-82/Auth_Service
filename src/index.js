const express=require("express");
const { PORT } = require('../../src/config/serverConfig');
const app=express();

const prepareAndStartServer=()=>{
    app.listen(3001,()=>{
        console.log(`Server Started on ${PORT}`);
    })

}

prepareAndStartServer();