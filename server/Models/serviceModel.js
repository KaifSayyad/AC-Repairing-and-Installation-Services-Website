import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    // category: String,
    // image: String,
    numBookings: {
        type: Number,
        default: 0
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;