import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected (Customer/Admin)
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

// Admin-only
router.get("/", protect, admin, getAllUsers);

export default router;
