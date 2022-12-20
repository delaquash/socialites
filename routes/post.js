import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPost, getUserPost, likePost } from "../controllers/post.js";

const router = express.Router();

// get
router.get("/", verifyToken, getFeedPost);
router.get("/:userId/post", verifyToken, getUserPost);

// update
router.patch("/:id/like", verifyToken, likePost);

export default router