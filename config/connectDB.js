import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;