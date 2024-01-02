import Service from '../Models/serviceModel.js';
import mongoose from 'mongoose';   

//Function to get all services
const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Function to get a service by id
const getService = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        res.status(200).json(service);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Function to create a service
const createService = async (req, res) => {
    const service = req.body;
    const newService = new Service(service);
    try {
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//Function to update a service
const updateService = async (req, res) => {
    const { id: _id } = req.params;
    const service = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No service with that id');
    const updatedService = await Service.findByIdAndUpdate(_id, service, { new: true });
    res.json(updatedService);
}

//Function to delete a service
const deleteService = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ message: "No Service with that id" });
    }
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "Service deleted successfully" });
}

export { getServices, getService, createService, updateService, deleteService };