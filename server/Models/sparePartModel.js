import e from 'express';
import mongoose from 'mongoose';

const sparePartsSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    isAvailable: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model('SparePart', sparePartsSchema);