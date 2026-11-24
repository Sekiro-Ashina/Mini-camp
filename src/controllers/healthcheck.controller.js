import {ApiResponse} from "../utils/api-Response.js";

const healthCheck = ((req,res) =>{
    try {
        res
        .status(200)
        .json(new ApiResponse (200,{message:"Server is running"}));
    } catch (error) {
        
    }
})
export {healthCheck};