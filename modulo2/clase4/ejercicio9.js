/*Supongamos que cada meta tiene un estado: “completa” o “pendiente”.
Filtra las metas que ya completaste y muéstralas en la consola.*/
const fs=require(`fs`);

fs.readFile(`metas.json`, `utf-8`, (err,data)=>{
    if(err){
        console.error(`Se produjo un error al leer las metas: `,err);
    }else{
        const metas=JSON.parse(data);
        const metasCompletadas=metas.filter(meta=>meta.estado===`completa`);
        console.log(`Las metas completadas son: `, metasCompletadas);
    }
});