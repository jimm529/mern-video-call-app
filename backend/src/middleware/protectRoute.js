import {  requireAuth} from '@clerk/express';
import User from '../models/User.js'


export const protectRoute= [
    requireAuth(),
    async(req,res,next)=>{
       try{
        const clerkID=req.auth().userId;

        if(!clerkID) return res.status(401).json({msg:"Unauthorized -invalid token"});


        const User =await User.findOne({clerkID});
        if(!User ) return res.status(404).json({msg:"User not found"})
            req.User =user
         next()

       }catch(error){
            console.error("Error in protectRoute middleware",error);
            res.status(500).json({message:"Internal Server is runing"})
       }

    }
   
]