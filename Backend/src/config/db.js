import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectDB(){
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("Failed to connect DB", error)
        
    }
}
