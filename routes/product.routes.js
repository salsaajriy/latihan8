import express from 'express';
import { authBearer } from '../middlewares/auth.middleware.js';
import * as productController from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", authBearer, productController.createProduct);
router.put("/:id", authBearer, productController.updateProduct);
router.delete("/:id", authBearer, productController.deleteProduct);

export default router;
