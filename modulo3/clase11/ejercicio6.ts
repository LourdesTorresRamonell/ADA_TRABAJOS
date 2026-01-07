let autenticar=async(usuario:string)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(usuario){
                resolve(`La autentificacion fue exitosa`);
            }else{
                reject(`Error: el usuario no se encuentra`);
            }
        }, 2000);
    });
}

async function iniciarSesion(usuario:string){
    try{
        let mensaje=await autenticar(usuario);
        console.log(mensaje);
    }catch(error){
        console.log(`Se produjo un error en la autentificacion: `,error);
    }
}

iniciarSesion(`Lu`);