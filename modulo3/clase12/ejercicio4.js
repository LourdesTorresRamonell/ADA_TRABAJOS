import express from "express";

let app=express();

app.get(`/`, (req, res)=>{
    res.send(`Bienvenido al servidor de Express`);

});

app.use((req,res)=>{
    res.status(404).send(`Ruta no encontrada`);
});

app.listen(3000, ()=>{
    console.log(`Servidor escuchando el puerto 3000`);
});