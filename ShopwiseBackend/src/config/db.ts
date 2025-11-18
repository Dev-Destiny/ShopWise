import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export async function connectDB (){
    try {
        const URL = process.env.MONGODB_URL || ""
        await mongoose.connect(URL)
        console.log("MongoDb connected")
    } catch (error) {
        console.log("MongoDb connection Failed")
    }
}

