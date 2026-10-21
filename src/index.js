import dotenv from "dotenv"

dotenv.config({
    path : "./.env"
});

let myUserName = process.env.APP_USERNAME;
let MyDataBase = process.env.DATABASE;

console.log(myUserName);
console.log(MyDataBase);