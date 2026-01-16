import express from "express"
import userRouter from "./routers/userRouters";
import productRouter from "./routers/producRouters";

let app=express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, ()=>{
    console.log("Servidor escuchando en http://localhost:3000");
});