let descargarArchivo=async(archivo:string)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
            if(archivo){
                resolve(`Se descargo el archivo ${archivo}`);
            }else{
                reject(`Se produjo un error en la descarga`);
            }
        }, 2000)
    });
}

async function inicioDescarga(archivo:string) {
    try{
        let mensaje=await descargarArchivo(archivo);
        console.log(mensaje);
    }catch(error){
        console.log(`Error:`, error);
    }
}

inicioDescarga(`Nose.txt`);