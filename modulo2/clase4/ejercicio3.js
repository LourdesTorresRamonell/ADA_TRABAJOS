/*¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
en el archivo perfil.json.*/
const fs=require(`fs`);

fs.readFile(`perfil.json`, `utf8`, (err,data)=>{
    if(err){
        console.error(`Se produjo un error: `, err);
    }else{
        const perfil=JSON.parse(data);
        perfil.hobby= "Crear Arte";
        fs.writeFile(`perfil.json`, JSON.stringify(perfil,null,2), (err)=>{
            if(err){
                console.error(`Se produjo un error al actualizar el perfil: `, err);
            }else{
                console.log(`Se actualizo el perfil`);
            }
        })
    }
})