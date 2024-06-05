// import dotenv from 'dotenv';

// dotenv.config();
// import mongoose from 'mongoose'
// const connectDB = async () => {
//     return mongoose.connect(
//         process.env.MONGODB_URI,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
// })
// }
// export {connectDB}

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.error('Database connection failed:', error);
//         process.exit(1); // Exit process with failure
//     }
// };

// export { connectDB };

// import mongoose from "mongoose";

// // uri="mongodb+srv://basundhara:iAQL204pVNsPD7ea@cluster0.mi0vldi.mongodb.net/testimonial_db?retryWrites=true&w=majority&appName=Cluster0"
// uri= "mongodb+srv://basundhara:iAQL204pVNsPD7ea@cluster0.mi0vldi.mongodb.net/Cluster0?retryWrites=true&w=majority"
// const connectDB=()=>{
//     return mongoose.connect(uri, {
//         useNewUrlParser:true,
//         useUnifieldTopology:true,
//     });
// };

// export default connectDB;

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file



const connectDB = async () => {
    const uri = process.env.MONGODB_URI; // Retrieve the URI from the environment variables

    if (!uri) {
        throw new Error('MONGODB_URI is not defined in .env file');
    }

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
