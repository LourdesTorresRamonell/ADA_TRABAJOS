import { Request, Response, NextFunction } from "express";

export let validateId=(req:Request, res:Response, next:NextFunction)=>{
    let id=Number(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({message:"El Id es invalido"});
    }
    next();
};