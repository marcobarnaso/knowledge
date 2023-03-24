import mongoose from "mongoose"

// const connect_db = ()=>{
//   mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(()=> {
//     console.log('Connected to database.')
//   }).catch((err)=>{
//     console.error(`Error connecting Database: ${err}`)
//   })
// }

mongoose.set("strictQuery", true)

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export {connect_db}
