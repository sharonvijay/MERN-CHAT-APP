import express from "express";
import {
	allUsers,
	registerUser,
	userAuth,
} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", userAuth);

router.get("/", allUsers);
export default router;
