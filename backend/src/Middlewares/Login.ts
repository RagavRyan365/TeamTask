import express from "express";
import bcrypt from "bcrypt";
import User from "../DB models/User.js";

const login = express.Router();

login.post("/",async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({Email:email}).select("Password");
    if(!user){
        return res.status(401).json({message:"Invalid Email or Password"});
    }
    const isMatch = await bcrypt.compare(password,user.Password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid Email or Password"});
    }
    res.status(200).json({message:"Login successful",data:{user}});

});

export default login;