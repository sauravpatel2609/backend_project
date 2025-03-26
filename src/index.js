//require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});


connectDB()
.then(()=>{
    console.log("Database connected successfully")
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})










// import express from "express";


// const app=express()


// ((async)=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
//         console.log("Database connected successfully")
//         app.on("error",()=>{
//             console.log("Error ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env
//         })
        
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// })()