import Product from "../models/productModels.js";


const addProduct = async (req, res) => {
    try {
        const { name, description, price, warranty, brand } = req.body;
        const product = new Product({ name, description, price, warranty, brand });
        res.status(201).json(product);


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
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
export { deleteProduct, updateProduct, addProduct, getProduct }


