import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";

import User from "./DB models/User.js";
import Group from "./DB models/Group.js";

//Import middleware
import signup from "./Middlewares/Signup.js";

dotenv.config();

const app = express();
const port:number = 8080;

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL as string)
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log(err));    

app.use(cors());
app.use(express.json());

//sesiion middleware
app.use(session({
    secret:process.env.SESSION_SECRET as string,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:1000*60*60*24*5,
    },
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URL as string,
        collectionName:"sessions",
    }),
}));

//Signup Middleware
app.use("/api/user/signup",signup);


//user info route -------------------------------------------------
app.get("/api/users/",(req,res)=>{
    const users = User.find().then((users: any)=>{
        res.status(200).json({message:"user info",data:users});
    });
});

app.listen(port,()=>console.log("server is alive on port 8080"));

