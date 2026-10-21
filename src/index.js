import dotenv from "dotenv"
import express from "express"

dotenv.config({
    path : "./.env"
});

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req,res) => {
    res.send("Instagram page");
})

app.listen(port, () => {
  console.log(`App listening on port  http:localhost/${port}`)
})