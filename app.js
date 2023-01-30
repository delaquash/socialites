import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import connectDB from "./config/connectDB.js";
import storage from "./config/storage.js";
import { register } from "./controllers/Auth.js";
import { createPost } from "./controllers/post.js";
import { verifyToken } from "./middleware/auth.js";
// import User from "./model/User.js";
// import Post from "./model/Post.js";
// import { posts, users } from "./data/index.js";
const app = express();
app.use(express.json());
// config
dotenv.config();
connectDB();

const __fileName = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__fileName);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "publics/assets")));

// file storage
const upload = multer({ storage });

// route with files
app.post("/auth/register", upload.single("picture"), register);
app.post("/post", verifyToken, upload.single("picture"), createPost);

// routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/routes", postRoutes);

// ADD DATA ONE TIME
// User.insertMany(users)
// Post.insertMany(posts)

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);