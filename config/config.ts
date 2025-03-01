import dotenv from 'dotenv';
const env = './config/.env';
dotenv.config({ path: env });
import mongoose from 'mongoose';

export const SERVER = {
	SERVER_HOSTNAME: process.env.SERVER_HOSTNAME || 'localhost',
	SERVER_PORT: process.env.PORT || 8000,	
};

export const DB_Connect = async () => {   

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!, {
            ssl: true, 
            connectTimeoutMS: 30000,
            socketTimeoutMS: 45000,
        });
        console.info(`MongoDB Connected: ${conn.connection.name}`);
        console.info(`MongoDB Connected: ${JSON.stringify(conn.connection.models)}`);
        console.info(`MongoDB Connected: ${conn.connection.host}`);
        return 'Connected';
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); 
    }
};