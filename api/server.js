import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user-route.js";
import { connect_db } from "./mongoose.js";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);

app.listen(port, () => {
  connect_db()  
  console.log(`Backend server running on port ${port}.`);
});
