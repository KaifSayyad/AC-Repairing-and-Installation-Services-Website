import express from 'express'
import {getSpareParts, getSparePart, createSparePart, updateSparePart, deleteSparePart} from '../Controllers/sparePartController.js'

const router = express.Router();

router.get('/', getSpareParts);
router.get('/:id', getSparePart);
router.post('/create', createSparePart);
router.patch('/:id', updateSparePart);
router.delete('/:id', deleteSparePart);

export default router;