import express from "express";
import { register } from "../controllers/user-controller.js"

const router = new express.Router();

router.post('/register', register)

export default router;

