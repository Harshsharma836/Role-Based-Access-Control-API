import express from "express";
import adminController from "../controllers/adminController.js";
import {
  authenticateJWT,
  authorizeRole,
} from "../middleware/jwt.middleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  authenticateJWT,
  authorizeRole(["admin"]),
  adminController.getAllUsers,
);
router.post("/signout", authenticateJWT, adminController.signOutAdmin);

export default router;
