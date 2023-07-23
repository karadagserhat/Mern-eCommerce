import express from 'express';
const router = express.Router();
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import {
  protectMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';
// import checkObjectId from '../middleware/checkObjectId.js';

router
  .route('/')
  .get(getProducts)
  .post(protectMiddleware, adminMiddleware, createProduct);

router.get('/top', getTopProducts);

router
  .route('/:id')
  .get(getProduct)
  .put(protectMiddleware, adminMiddleware, updateProduct)
  .delete(protectMiddleware, adminMiddleware, deleteProduct);

router.route('/:id/reviews').post(protectMiddleware, createProductReview);

export default router;
