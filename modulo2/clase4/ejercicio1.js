/*Imagina que acabas de unirte a una red social donde puedes crear tu
perfil digital básico. Tu misión es:
1. Crear un archivo llamado perfil.json.
2. Dentro de este archivo, guarda información sobre ti: nombre, edad
y tu ciudad favorita.
3. Usa el módulo fs para escribir este archivo desde Node.js*/

const fs=require(`fs`);

let perfil={
    nombre: "Lourdes",
    edad: 19,
    ciudadFavorita: "Cordoba"
};

fs.writeFile(`perfil.json`, JSON.stringify(perfil, null, 2), (err)=>{
    if(err){
        console.error(`Se produjo un error al crear el perfil: `, err);
    } else{
        console.log(`El perfil se creo correctamente `);
    }
});