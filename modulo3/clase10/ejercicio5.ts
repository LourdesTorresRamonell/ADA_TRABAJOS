function registrarUsuario():Promise<void>{
    return new Promise<void>((resolve, reject)=>{
        setTimeout(() => {
            console.log(`Usuario registrado`);
            resolve();
        }, 1000);
    });
}

function enviarEmail():Promise<void>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Enviando mail de bienvenida`);
            resolve();
        }, 1000);
    });
}

registrarUsuario()
    .then(()=>enviarEmail())
    .then(()=>console.log(`Bienvenido`))
    .catch(()=> console.log(`Se produjo un error`));