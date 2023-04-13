import express from "express";
import auth from "../middleware/auth.js";
import { rentalPicture, registerRental } from "../controllers/rental-controller.js";

const router = new express.Router();

router.post('/register', auth, registerRental)
router.post('/rentalPicture', auth, rentalPicture)

export default router;