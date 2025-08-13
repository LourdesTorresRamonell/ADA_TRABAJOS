/*Nunca está de más guardar una copia de seguridad. Escribe un programa
que copie el contenido de metas.json en un archivo llamado
respaldo_metas.json.*/
const fs=require(`fs`);

fs.copyFile(`metas.json`, `respaldo_de_metas.json`, (err)=>{
    if(err){
        console.error(`Se produjo un error al hacer el respaldo `);
    }else{
        console.log(`Se creo el respaldo en respaldo_de_metas.json`);
    }
});