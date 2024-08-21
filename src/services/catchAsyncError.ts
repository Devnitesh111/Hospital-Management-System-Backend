import { Request, Response } from "express";
const errorHandler = (fn:Function)=>{
    return (res:Response, req:Request)=>{
        fn(req,res).catch((err:Error)=>{
            console.log(err)
            return res.status(500).json({
                message : "internal error",
                errorMessage : err.message
            })
        })
    }
}

export default errorHandler