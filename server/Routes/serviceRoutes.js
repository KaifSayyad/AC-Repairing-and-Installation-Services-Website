import express from 'express'
import {getServices, getService, createService, updateService, deleteService} from '../Controllers/serviceController.js'

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getService);
router.post('/create', createService);
router.patch('/:id', updateService);
router.delete('/:id', deleteService);

export default router;