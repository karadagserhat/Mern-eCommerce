import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  // updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';
import {
  protectMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';

router
  .route('/')
  .post(protectMiddleware, addOrderItems)
  .get(protectMiddleware, adminMiddleware, getOrders);

router.route('/mine').get(protectMiddleware, getMyOrders);

router.route('/:id').get(protectMiddleware, getOrderById);

router
  .route('/:id/deliver')
  .put(protectMiddleware, adminMiddleware, updateOrderToDelivered);

export default router;
