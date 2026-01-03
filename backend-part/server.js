import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve('./.env') }); 

import express from "express"

import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

console.log("JWT SECRET =", process.env.JWT_SECRET);
console.log("STRIPE_SECRET_KEY =", process.env.STRIPE_SECRET_KEY);
//app config
const app= express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173", // frontend
        "http://localhost:5174" , // admin panel
        "https://new-food-delivery-app.netlify.app",  //  frontend netlify link
        "https://new-food-delivery-admin.netlify.app"  // admin netlify link
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
//db connection
connectDB();

app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")

})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})