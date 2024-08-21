import { NextFunction,Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/User";

export interface AuthRequest extends Request{
    user?:{
        username : string,
        email : string,
        role : string,
        password : string,
        id : string
    }
}

export enum Role{
    Admin = 'admin',
    Doctor = ' doctor',
    Patient = 'patient'
}

class AuthMiddleware{

    async isAuthenticated(req:AuthRequest,res:Response,next:NextFunction):Promise<void>{
        const token = req.headers.authorization
        if(!token || token === undefined ){
            res.status(403).json({
                message : "Token not Provided"
            })
            return
        }
        jwt.verify(token,process.env.SECRET_KEY as string,async(err,decoded:any)=>{
if(err){
    res.status(403).json({
        message:"Invalid token"
    })
}else{
    try{
        const userData = await User.findByPk(decoded.id)
        if(!userData){
            res.status(404).json({
                message : "No user with that token"
            })
            return
        }
        req.user = userData
        next()

    } catch(error){
        res.status(500).json({
            message : " something went wrong"
        })
    }
}
        })
    }

    restrictTo(...roles:Role[]){
        return(req:AuthRequest,res:Response,next:NextFunction)=>{
            let userRole = req.user?.role as Role
            console.log(userRole)
            if(!roles.includes(userRole)){
                res.status(403).json({
                    message : "you dont have permission"
                })
            }
            else{
                next()
            }
        }
    }
}

export default new AuthMiddleware()