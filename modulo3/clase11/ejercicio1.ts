let retraso=()=>new Promise(resolve=>{
    let segundosAleatorios=Math.random() * 2000 + 1000
    setTimeout(resolve, segundosAleatorios);
});

async function simuladorServidor(){
    await retraso();
    return `Servidor listo`
}

simuladorServidor().then(console.log);