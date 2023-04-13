import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connect_db } from "./mongoose.js";

import cors from "cors";
import userRoute from "./routes/user-route.js";
import rentalRoute from "./routes/rental-route.js";

const app = express();

app.use(cors({credentials: true, origin: "http://127.0.0.1:8800"}));
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.set("trust proxy", 1);
app.use(cookieParser());
app.use("/api/user", userRoute);
app.use("/api/rental", rentalRoute);

app.listen(port, () => {
  connect_db();
  console.log(`Backend server running on port ${port}.`);
});
