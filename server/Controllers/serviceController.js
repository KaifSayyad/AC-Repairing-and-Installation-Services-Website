import express from 'express';
import Service from '../Models/serviceModel.js';
import mongoose from 'mongoose';

const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

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

export { getServices, createService };