
import mongoose  from 'mongoose';
const ConnectDB=async()=>{
    try {
        const {connection}=await mongoose.connect("mongodb://127.0.0.1:27017/NEXT-AUTH")
        console.log(`mongoDB connected with${connection.host}URL`);
    } catch (error) {
        console.log(error.message);
    }
}

export default ConnectDB;