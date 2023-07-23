import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import {
  protectMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(registerUser)
  .get(protectMiddleware, adminMiddleware, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protectMiddleware, getUserProfile)
  .put(protectMiddleware, updateUserProfile);
router
  .route('/:id')
  .delete(protectMiddleware, adminMiddleware, deleteUser)
  .get(protectMiddleware, adminMiddleware, getUserById)
  .put(protectMiddleware, adminMiddleware, updateUser);

export default router;
