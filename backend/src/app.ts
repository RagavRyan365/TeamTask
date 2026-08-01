import express from "express";
import cors from 'cors';

const app = express();
const port:number = 8080;

app.use(cors());
app.use(express.json());

app.get("/api",(req,res)=>{
    res.json({msg:"hello button click"});
});

app.listen(port,()=>console.log("server is alive on port 8080"));

