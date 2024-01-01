import express from 'express'
import {getServices, createService} from '../Controllers/serviceController.js'

const router = express.Router();

router.get('/', getServices);
router.post('/create', createService);

export default router;