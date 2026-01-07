let consulta1=()=>new Promise(resolve=>setTimeout(()=>resolve(`Consulta 1 completada`), 1000));
let consulta2=()=>new Promise(resolve=>setTimeout(()=>resolve(`Consulta 2 completa`), 2000));
let consulta3=()=>new Promise(reslve=>setTimeout(()=>resolve(`Consulta 3 completa`), 3000));

async function consultasParalelas(){
    try{
        let resultados=await Promise.all([consulta1(), consulta2(), consulta3()]);
        console.log(`Todas las consultas se completaro: ${resultados}`);
    }catch(error){
        console.log(`Se produjo un error en una consulta: ${error}`);
    }
}

consultasParalelas();