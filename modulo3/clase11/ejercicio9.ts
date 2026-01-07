let tarea1=()=>new Promise(resolve=>{
    setTimeout(()=>resolve(`La tarea 1 se completo`), 2000);
});
let tarea2=()=>new Promise(resolve=>{
    setTimeout(()=>resolve(`La tarea 2 se completo`), 2000);
});

async function ejecucion(){
    let resultado1=await tarea1();
    console.log(resultado1);
    if(resultado1){
        let resultado2=await tarea2();
        console.log(resultado2);
    }
}

ejecucion();