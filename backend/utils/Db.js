import mongoose from "mongoose";

const ConnectDb = async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log("mongodb connected succesfully");
    } catch (error) {
        console.log(error);
        
    }
}

export default ConnectDb;