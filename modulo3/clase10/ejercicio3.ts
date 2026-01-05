function consultarApi(api:string, tiempo:number){
    return new Promise((resolve, reject)=>{
        console.log(`Consultando ...`);
        setTimeout(()=>{
            let exito=Math.random()>0.5;
            if(exito){
                resolve(`La api ${api} respondio exitosamente`);
            }else{
                reject(`Error: la api ${api} no respondio`);
            }
        }, tiempo);
    });
}

let api1=consultarApi(`Usuarios`, 2000);
let api2=consultarApi(`Producto`, 3000);
let api3=consultarApi(`Ventas`, 4000);

Promise.all([api1,api2,api3])
    .then((resultados)=>{
        console.log(`Todas las consultas resultaron exitosas: ${resultados}`);
    })
    .catch((error)=>{
        console.log(`No repondieron todas las apis: ${error}`);
    })