import e from 'express';
import mongoose from 'mongoose';

const sparePartsSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

export default mongoose.model('SparePart', sparePartsSchema);