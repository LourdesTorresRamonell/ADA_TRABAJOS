/*¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
Verifica que el archivo existe antes de intentar borrarlo.*/
const fs=require(`fs`);

if(fs.existsSync(`perfil.json`)){
    fs.unlink(`perfil.json`,(err)=>{
        if(err){
            console.error(`Se produjo un error al eliminar el perfil: `,err);
        }else{
            console.log(`Perfil eliminado `);
        }
    });
}else{
    console.log(`El archivo del perfin no existe `);
}