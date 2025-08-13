/*Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
en el ejercicio anterior y muestra la información en la consola para
asegurarte de que todo está correcto.*/

const fs=require(`fs`);

fs.readFile(`perfil.json`, `utf8`, (err,data)=>{
    if(err){
        console.error(`Se produjo un error al leer un archivo: `, err);
        return
    } else{
        console.log(`Aqui esta tu perfil: `, data);
    }
});