import express from "express";
import usersRouters from "./routes/users-routes";
import externalRouters from "./routes/external-routers";

const app=express();

app.use(express.json());
app.use("/users", usersRouters);
app.use("/external", externalRouters);

app.listen(3000, ()=>{
    console.log(`Servidor escuchando en http://localhost:3000`);
});