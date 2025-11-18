import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db";
import cors from "cors"
import productRoute from "./routes/productsRoute"
const app = express();
dotenv.config()

app.use(express.json())
app.use(cors())



app.get("/", (req,res) =>{
    res.send("Hello")
})
const port = process.env.PORT || "";
app.use("/api/products", productRoute)

try {
    connectDB()
    app.listen(port, ()=>{
    console.log(`Server is running in port http://localhost:${port}`)
})
} catch (error) {
    console.log("Error")
}