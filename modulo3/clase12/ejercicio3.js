import express from "express";

let app=express();
 let users=[
    {id:1, name:`Lourdes`, email:`luli@gmail.com`},
    {id:2, name:`Nahuel`, email:`nahuel@gmail.com`}
 ];

app.get(`/users/:id`, (req, res)=>{
    let {id}=req.params;
    let user=users.find(u=>u.id===parseInt(id));

    if(!user){
        return res.status(404).send(`El usuario no se encuentra`);
    }

    res.json(user);
});

app.listen(3000, ()=>{
    console.log(`Servidor escuchando en el puerto 3000`);
});