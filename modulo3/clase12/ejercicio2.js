import express from "express";

let app=express();
app.use(express.json());
let users=[];

app.post(`/users`, (req, res)=>{
    let {name, email}=req.body;
    if(!name||!email){
        return res.status(400).send(`Error: todos los datos son obligatorios`);
    }

    users.push({name, email});
    res.status(201).json({message:`El usuario a sdo agregado con exito`});
});

 app.listen(3000, ()=>{
    console.log(`Servidor escucaando en el puerto 3000`);
 });