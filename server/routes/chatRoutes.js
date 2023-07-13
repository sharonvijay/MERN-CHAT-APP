import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
	accessChat,
	createGroupChat,
	fetchChats,
	renameGroup,
	removeFromGroup,
	addToGroup,
} from "../controllers/chatControllers.js";

const router = express.Router();

router.post("/", protect, accessChat);
router.post("/group", protect, createGroupChat);

router.get("/", protect, fetchChats);

router.put("/rename", protect, renameGroup);
router.put("/groupremove", protect, removeFromGroup);
router.put("/groupadd", protect, addToGroup);

export default router;
