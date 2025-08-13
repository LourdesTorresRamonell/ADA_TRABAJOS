/*¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
en el archivo perfil.json.*/ 
const fs=require(`fs`);

if(fs.existsSync(`perfil.json`)){
    console.log(`El perfil existe `);
}else{
    const perfilBasico={
        nombre: "Lorudes",
        edad: 19,
        ciudadFavorita: "Seul"
    };
    
    fs.writeFile(`perfil.json`, JSON.stringify(perfilBasico, null, 2), (err)=>{
        if(err){
            console.error(`Se produjo en error: `, err);
        }else{
            console.log(`Perfil creado `);
        }
    })
}