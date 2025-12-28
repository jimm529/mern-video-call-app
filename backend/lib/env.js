import dotenv from "dotenv";

dotenv.config({quite:true});

export const ENV = {
  PORT: process.env.PORT ,
  DB_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV 
};
