import Product from '../Models/productModel.js';
import mongoose from 'mongoose';

//Function to get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Function to get a product by id
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Function to create a product
const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//Function to update a product
const updateProduct = async (req, res) => {
    const { id: _id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');
    const updatedProduct = await Product.findByIdAndUpdate(_id, product, { new: true });
    res.json(updatedProduct);
}

//Function to delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No Product with that id" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };