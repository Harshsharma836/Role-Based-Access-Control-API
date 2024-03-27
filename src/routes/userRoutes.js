import express from "express";
import userController from "../controllers/userController.js";
import {
  authenticateJWT,
  authorizeProfileVisibility,
} from "../middleware/jwt.middleware.js";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/signout", authenticateJWT, userController.signOutUser);
router.get(
  "/profile",
  authenticateJWT,
  authorizeProfileVisibility,
  userController.getUserProfile,
);
router.put("/profile", authenticateJWT, userController.editUserProfile);

export default router;
