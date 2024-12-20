import express from "express"
import { addProduct, deleteProduct, getProduct, updateProduct } from "../controller/productController.js"
import { searchProduct } from "../controller/searchController.js"



const productRouter=express.Router()




productRouter.post("/addproduct",addProduct)
productRouter.get("/getproduct",getProduct)
productRouter.put("/updateproduct/:id",updateProduct)
productRouter.delete("/deleteproduct/:id",deleteProduct)
productRouter.get("/search",searchProduct)

export default productRouter