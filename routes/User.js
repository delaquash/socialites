import { verifyToken } from "../middleware/auth";
import { getUser, getUserFriends, addRemovefriend } from "./user.js";

const router = express.Router();

// read route
router.get("/:id", verifyToken, getUser);
router.get("/:id/:friends", verifyToken, getUserFriends);

// update route
router.patch("/:id/:friendId", verifyToken, addRemovefriend)

export default router;