import mongoose from "mongoose"

mongoose.set("strictQuery", false)

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export { connect_db }
