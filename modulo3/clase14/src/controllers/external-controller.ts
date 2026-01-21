import { Request, Response } from "express";

export let getExternalUsers=async(req:Request, res:Response)=>{
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await response.json();
    res.json(data);
};

export let searchExternalUser= async(req:Request, res:Response)=>{
    let { name }=req.query;

    if(!name || typeof name !== "string"){
        return res.status(400).json({message: "Se debe indicar un nombre"});
    }

    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    let users=await response.json();
    let user=users.find((u:any)=>u.name===name);

    if(!user){
        return res.status(404).json({message:"El usuario no se encuentra"});
    }

    res.json(user);
};