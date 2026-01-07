async function recupContraseña(email:string) {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Enviando el correo de recuperacion a ${email}`);
        }, 3000);
    });
}

async function iniciarRecuperacion(email:string) {
    let resultado=await recupContraseña(email);
    console.log(resultado);    
}

iniciarRecuperacion(`Luli2000@gmail.com`);