import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUser, getUserFriends, addRemovefriend } from "../controllers/users.js";

const router = express.Router();

// read route
router.get("/:id", verifyToken, getUser);
router.get("/:id/:friends", verifyToken, getUserFriends);

// update route
router.patch("/:id/:friendId", verifyToken, addRemovefriend)

export default router;