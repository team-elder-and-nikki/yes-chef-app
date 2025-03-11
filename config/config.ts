import dotenv from 'dotenv';
import { MongoClient } from "mongodb";

const env = './config/.env';
dotenv.config({ path: env });

export const SERVER = {
	SERVER_HOSTNAME: process.env.SERVER_HOSTNAME || 'localhost',
	SERVER_PORT: process.env.PORT || 8000,	
};


export const Client_Connect = async () => {
    try{
    // connect to DB
    const client: MongoClient = await MongoClient.connect(
        process.env.MONGO_URI!,
        {
          ssl: true,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 45000,
        }
      );
  
    console.log("Client database connection was successful.");
    return client;

    }catch(err){
        console.error('Failed to connect to Client:', err);
        process.exit(1);
    }
};

export const Client_Connect = async () => {
    try{
    // connect to DB
    const client: MongoClient = await MongoClient.connect(
        process.env.MONGO_URI!,
        {
          ssl: true,
          connectTimeoutMS: 30000,
          socketTimeoutMS: 45000,
        }
      );
  
    console.log("Client database connection was successful.");
    return client;

    }catch(err){
        console.error('Failed to connect to Client:', err);
        process.exit(1);
    }
};