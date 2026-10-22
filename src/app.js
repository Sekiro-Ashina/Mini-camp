import express from "express";

const app = express();

//basic config

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"));



app.get("/",(req,res) => {
    res.send("Home page is working!!!");
});


export default app;