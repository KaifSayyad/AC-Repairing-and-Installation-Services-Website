import SparePart from '../Models/sparePartModel.js';
import mongoose from 'mongoose';

//Function to get all spare parts
const getSpareParts = async (req, res) => {
    try {
        const spareParts = await SparePart.find();
        res.status(200).json(spareParts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Function to get a spare part by id
const getSparePart = async (req, res) => {
    const { id } = req.params;
    try {
        const sparePart = await SparePart.findById(id);
        res.status(200).json(sparePart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Function to create a spare part
const createSparePart = async (req, res) => {
    const sparePart = req.body;
    const newSparePart = new SparePart(sparePart);
    try {
        await newSparePart.save();
        res.status(201).json(newSparePart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//Function to update a spare part
const updateSparePart = async (req, res) => {
    const { id: _id } = req.params;
    const sparePart = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No spare part with that id');
    const updatedSparePart = await SparePart.findByIdAndUpdate(_id, sparePart, { new: true });
    res.json(updatedSparePart);
}

//Function to delete a spare part
const deleteSparePart = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No Spare Part with that id" });
    }
    await SparePart.findByIdAndDelete(id);
    res.status(200).json({ message: "Spare Part deleted successfully" });
}

export { getSpareParts, getSparePart, createSparePart, updateSparePart, deleteSparePart };