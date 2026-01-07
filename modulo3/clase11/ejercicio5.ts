let actuUsuario=()=>new Promise (resolve=>setTimeout(()=>resolve((`El usuario se actualizo`)), 1500));
let actuPedidos=()=>new Promise(resolve=>setTimeout(()=>resolve(`Los pedidos han sido actualizados`), 1500));
async function actuTodo(){
    let resultados=await Promise.all([actuUsuario(), actuPedidos()]);
    console.log(resultados);
}

actuTodo();