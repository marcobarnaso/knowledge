import express from "express";
import auth from "../middleware/auth.js";
import { register, login, logout } from "../controllers/user-controller.js"

const router = new express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

export default router;

