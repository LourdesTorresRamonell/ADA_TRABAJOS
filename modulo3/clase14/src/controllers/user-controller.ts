import { Request, Response } from "express";
import { users } from "../data/users-data";
import { User } from "../interfaces/user-interface";

export let updateUser=(req:Request, res:Response)=>{
    let  id=Number(req.params.id);
    let { name, email }=req.body;
    let user=users.find(u=>u.id===id);
    if(!user){
        return res.status(404).json({message:"El usuario no se encuentra"});
    }
    if(!name||!email){
        return res.status(400).json({message:"Faltan datos obligatorios"});
    }

    user.name=name;
    user.email=email;
    res.json(user);
};

export let deletUser=(req:Request, res:Response)=>{
    let id=Number(req.params.id);
    let index=users.findIndex(u=>u.id===id);

    if(index===-1){
        return res.status(404).json({message:"El usuario no se encuentra"});
    }

    users.splice(index, 1);
    res.json({message: "El usuario se elimino correctamente"});
};

export let searchByName=(req:Request, res:Response)=>{
    let { name }=req.query;
    if(!name||typeof name !=="string"){
        return res.json([]);
    }

    let result=users.filter(u=> u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    res.json(result);
};

export let countByDomain=(req:Request, res:Response)=>{
    let { domain }= req.query;

    if(!domain||typeof domain!=="string"){
        return res.status(400).json({message: "Se debe indicar un dominio"});
    }

    let count=users.filter(u=>u.email.endsWith(domain)).length;
    res.json({ count });
};

export let addManyUsers=(req:Request, res:Response)=>{
    let newUsers=req.body;

    if(!Array.isArray(newUsers)){
        return res.status(400).json({message: "Se debe enviar un arreglo"});
    }

    for(let i=0;i<newUsers.length;i++){
        let { name, email, age }=newUsers[i];
        if(!name||!email||!age){
            return res.status(400).json({message:`Hay un usuario invalido en la posicion ${i}`});
        }
    }

    newUsers.forEach(u=>{  
        users.push({
            id:users.length+1,
            name:u.name,
            email:u.email,
            age:u.age
        });
    });

    res.json(users);
};

export let getSortedUsers=(req:Request, res:Response)=>{
    let { order }=req.query;
    let sorted=[...users].sort((a, b)=>
        order==="desc"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    );

    res.json(sorted);
}

export let getByAgeRange=(req:Request, res:Response)=>{
    let minAge=Number(req.query.minAge);
    let maxAge=Number(req.query.maxAge);

    if(!minAge||!maxAge){
        return res.status(400).json({message:"Se debe indicar la minima edad y la maxima"});
    }

    let result=users.filter(u=>u.age>=minAge && u.age<=maxAge);
    res.json(result); 
};

export let getStats=(req:Request, res:Response)=>{
    let total=users.length;
    let avgAge=users.reduce((sum, u)=>sum+u.age,0)/total;
    let youngest=users.reduce((a, b)=>a.age<b.age ?a :b);
    let oldest=users.reduce((a, b)=>a.age>b.age ?a :b);

    res.json({
        totalUsuario: total,
        edadPromedio: avgAge,
        usuarioMasJoven:youngest,
        usuarioMasGrande:oldest
    });
};