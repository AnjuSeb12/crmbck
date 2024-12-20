import express from 'express';
import productRouter from './router/productRouter.js';
import cors from "cors"






const app=express()
app.use(cors({
    credentials:true,
    origin:true,
}));


app.use(express.json());



app.use("/api/v1/product",productRouter)

app.use((err,req,res,next)=> {
    console.log(err.message);
});

export default app;