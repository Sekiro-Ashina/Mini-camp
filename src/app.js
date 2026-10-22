import express from "express";

const app = express();

//basic config

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"));

//CORS Config

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    Credential:true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTION",],
    allowedHeaders: ["Content-Type" , "Authorization",],
   }),
);

app.get("/",(req,res) => {
    res.send("Home page is working!!!");
});


export default app;