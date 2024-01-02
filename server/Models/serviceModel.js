import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    isAvailable: {
        type: Boolean,
        default: true
    }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;