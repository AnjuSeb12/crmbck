import Product from "../models/productModels.js";


const addProduct = async (req, res) => {
    try {
        const { name, description, price, warranty, brand } = req.body;
        
        const product=new Product({
            name,
            description,price,
            warranty,
            brand
        })
        await product.save();
        res.status(201).json({
            success:true,
            message:"Added Product",
            product
        });


    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);


    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
const updateProduct = async (req, res) => {
    try {
       
        const {id}=req.params;
        const {name,description,price,warranty,brand}=req.body;
        const productUpdate=await Product.findOne({_id:id})
        productUpdate.name=name;
        productUpdate.description=description;
        productUpdate.price=price;
        productUpdate.brand=brand;
        productUpdate.warranty=warranty;
        await productUpdate.save();
        res.status(200).json(
            {
                success:true,
                maessage:"updated",
                productUpdate
            }
        );
    } catch (error) {
        return res.status(500).json({ 
            success:false,
            message:"Error"
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export { deleteProduct, updateProduct, addProduct, getProduct }


