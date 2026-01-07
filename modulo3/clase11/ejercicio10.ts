let actuInventario=async(cantidad:number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(cantidad>0){
                resolve(`Inventeario actualizado`);
            }else{
                reject(`El inventario debe ser mayor a 0`);
            }
        }, 1500);
    });
}

async function gestionarInventario(cantidad:number) {
    try{
        let mensaje=await actuInventario(cantidad);
        console.log(mensaje);
    }catch(error){
        console.log(`Error:`, error);
    }
}

gestionarInventario(50);