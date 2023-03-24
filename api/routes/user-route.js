import express from "express";
import { register } from "../controllers/user-controller.js";
//import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/registerUser", register)
//router.delete("/:id", verifyToken, deleteUser);
//router.get("/:id", getUser);

export default router;

