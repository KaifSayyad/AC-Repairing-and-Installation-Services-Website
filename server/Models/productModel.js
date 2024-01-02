import e from 'express';
import mongoose from 'mongoose';
import { esbuildVersion } from 'vite';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    // image: String,
    isRefurbished: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model('Product', productSchema);