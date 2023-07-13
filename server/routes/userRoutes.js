import express from "express";
import {
	allUsers,
	registerUser,
	userAuth,
} from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", userAuth);

router.get("/", protect, allUsers);
export default router;
