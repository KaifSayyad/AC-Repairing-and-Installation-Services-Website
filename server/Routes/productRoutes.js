import express from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../Controllers/productController.js";

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/create', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;