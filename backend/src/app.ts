import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";

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

let users:Record<string,string> = {}

//Signup route -------------------------------------------------
function password_check(req:express.Request,res:express.Response,next:express.NextFunction){
    const {password,confirmPassword} = req.body;
    if(password !== confirmPassword){
        return res.status(400).json({message:"passwords do not match"});
    }
    next();
}

function email_check(req:express.Request,res:express.Response,next:express.NextFunction){
    const {email} = req.body;
    if(users.hasOwnProperty(email)){
        return res.status(400).json({message:"email already exists"});
    }
    next();
}

app.post("/api/user/signup",password_check,email_check,(req,res)=>{
    const {username,email,password} = req.body;
    users[email] = password;
    res.status(200).json({message:"user created successfully",data:{username,email,password}});
});

//Login route -------------------------------------------------
app.post("/api/user/login",(req,res)=>{
    const {email,password} = req.body;
    if(!users.hasOwnProperty(email)){
        return res.status(400).json({message:"Incorrect Password or email"});
    }
    if(users[email] !== password){
        return res.status(400).json({message:"Incorrect Password or email"});
    }
    res.status(200).json({message:"login successful",data:{email}});
});

//user info route -------------------------------------------------
app.get("/api/users/",(req,res)=>{
    res.status(200).json({message:"user data",data:{users}});
});

app.listen(port,()=>console.log("server is alive on port 8080"));

