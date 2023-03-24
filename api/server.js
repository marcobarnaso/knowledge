import express from "express"
import {connect_db} from "./mongoose.js"
import dotenv from "dotenv"
import userRoute from "./routes/user-route.js"

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json)
app.use("/api/users", userRoute);


app.listen(port, ()=> {
    connect_db()
    console.log(`Backend server running on port ${port}`)
})





