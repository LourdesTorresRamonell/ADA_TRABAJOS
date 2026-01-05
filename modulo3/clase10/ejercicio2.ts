function enviarCorreo(detinatario:string){
    return new Promise((resolve, reject)=>{
        console.log(`Enviando correo ...`);

        setTimeout(()=>{
            const enviado=Math.random()>0.5;
            if(enviado){
                resolve(`Correo enviado a ${detinatario}`);
            }else{
                reject(`Error: No se pudo enviar el correo a: ${detinatario}`);
            }
        }, 2000);
    });
}

enviarCorreo(`luli2000torres@gmail.com`)
    .then((m)=>console.log(m))
    .catch((e)=>console.log(e))
    .finally(()=>console.log(`Operacion finalizada`));
enviarCorreo(`Roxana@gmail.com`)
    .then((m)=>console.log(m))
    .catch((e)=>console.log(e))
    .finally(()=>console.log(`Operacion finalizada`));