/*Es momento de planear tus metas. Crea un archivo llamado metas.json
con una lista vacía al principio. Luego, agrega metas como: “Aprender
Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo*/
const fs=require(`fs`);

let metas=[];
metas.push(`Aprender Node.js`);
metas.push(`Viajar a Japon`);

fs.writeFile(`metas.json`, JSON.stringify(metas, null, 2), (err)=>{
    if(err){
        console.error(`Se produjo un error: `, err);
    }else{
        console.log(`Listado de metas creado con exito `);
    }
});