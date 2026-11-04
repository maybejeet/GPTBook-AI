import { toNodeHandler } from "better-auth/node";
import "dotenv/config"
import express from "express";
import { auth } from "./lib/auth.js";

const app = express();
const port = process.env.PORT

app.all("/api/auth/*", toNodeHandler(auth));
// Mount body-parsing middleware after the Better Auth handler.
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello World!!!")
})

app.get("/health", (req,res)=>{
    res.json({status : "ok"})
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`);
    
})