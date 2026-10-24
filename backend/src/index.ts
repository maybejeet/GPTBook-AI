import "dotenv/config"
import express from "express";

const app = express();
const port = process.env.PORT

app.get("/", (req, res)=>{
    res.send("Hello World!!!")
})

app.get("/health", (req,res)=>{
    res.json({status : "ok"})
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`);
    
})