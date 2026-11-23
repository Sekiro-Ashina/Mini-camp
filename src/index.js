import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/db_index.js";


dotenv.config({
    path : "./.env"
});

const port = process.env.PORT || 3000

connectDB()
   .then( () =>{
    app.listen(port, () =>{
      console.log(`App is listening on port http://localhost:${port}`);
    });
   })
   .catch((err) => {
    console.error("Error in Mongo DB connection" ,err);
    process.exit(1);
   });