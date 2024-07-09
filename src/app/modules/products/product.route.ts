import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductController } from './product.controller';


const router = express.Router();


router.post('/product',validateRequest(ProductValidation.productVAlidationSchemaCreate),ProductController.createProduct);
router.get('/product',ProductController.getAllProduct);
router.get('/product/:id',ProductController.getSingleProduct);
router.put('/product/:id',validateRequest(ProductValidation.productVAlidationSchemaUpdate),ProductController.updateProduct);
router.delete('/product/:id',ProductController.deleteProduct)


export const ProductRoutes = router;