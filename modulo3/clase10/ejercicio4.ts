let tarea1=new Promise((resolve)=>
setTimeout(() => {
    resolve(`La tarea 1 se completo`)
}, Math.random()*50));

let tarea2=new Promise((resolve)=>
    setTimeout(()=>resolve(`La tarea 2 se completo`), Math.random()*50)
);

let tarea3=new Promise((resolve, reject)=>
    setTimeout(()=>reject(`La tarea 3 produjo error`), Math.random()*50)
);

Promise.race([tarea1, tarea2, tarea3])
    .then((resltado)=>{
        console.log(`La tarea ganadora es: ${resltado}`);
    })
    .catch((error)=>{
        console.log(`La primera tarea fallo: ${error}`);
    });