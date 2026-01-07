let pago=async(monto:number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(monto<=1000){
                resolve(`Pago realizado`);
            }else{
                reject(`El monto excede el limite, pago rechazado`);
            }
        }, 3000);
    });
}

async function ejecutarPago(monto:number){
    try{
        const resultado=await pago(monto);
        console.log(resultado);
    }catch(error){
        console.log(`Se produjo un error en el pago: `, error);
    }
}

ejecutarPago(100);