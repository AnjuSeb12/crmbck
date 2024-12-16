import express, { Router } from "express"
import { addProduct, deleteProduct, getProduct, updateProduct } from "../controller/productController.js"



const productRouter=express.Router()




productRouter.post("/addproduct",addProduct)
productRouter.get("/getproduct",getProduct)
productRouter.post("/updateproduct",updateProduct)
productRouter.post("/deleteproduct",deleteProduct)
export default productRouter