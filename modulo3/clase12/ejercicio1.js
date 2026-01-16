import express from "express";
let app=express();

let users=[
    {name:`Diana Medina`, email:`diana@gmail.com`},
    {name:`Kevin Rodriguez`, email:`kevin@gmail.com`}
];

app.get(`/users`, (req, res)=>{
    res.status(200).json(users);
});

app.listen(3000, ()=>{
    console.log(`Servidor escuchando en el puerto 3000`);
});