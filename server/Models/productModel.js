import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;