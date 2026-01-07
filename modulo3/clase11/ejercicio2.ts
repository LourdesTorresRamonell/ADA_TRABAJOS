let obtenerDatos=async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Datos obtenidos`);
        }, 2000);
    });
}

async function leerDatos(){
    try{
        let datos=await obtenerDatos();
        console.log(datos);
    }catch(error){
        console.log(`Error al leer los datos:`, error);
    }
}

leerDatos();