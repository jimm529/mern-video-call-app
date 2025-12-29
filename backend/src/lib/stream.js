import {streamchat} from "stream-chat";
import { ENV } from "./env.js";


const apiKey = ENV.STREAM_API_KEY;
const apiSecreat = ENV.STREAM_API_KEY;

if(!apiKey || !apiSecreat){

 console.error("Stream API KEY or SECRET is missing ");


}

export const chtClient = StreamChat.getInstance(apiKey,apiSecreat);


export const upsertstreamUsers =async(userData)=>{

  try{
    await chatClient.upsertstreamUsers([userData])
     console.log("Stream user upserted sucessfully:: ",userData);

  }catch(error){
    console.error("Error upserting Stream user:",error);


  }

}


export const deletestreamUsers =async(userId)=>{

  try{
    await chatClient.deleteUser([userId])
    console.log("Stream user deleted sucessfully:: ",userId);

  }catch(error){
    console.error("Error deleting Stream user:",error);


  }

}

