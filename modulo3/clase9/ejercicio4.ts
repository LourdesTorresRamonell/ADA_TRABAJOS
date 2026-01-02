type Amigo=[string,boolean];
let amigos:Amigo[]=[];

function agregarAmigo(nombre:string, estado:boolean){
    const nuevoAmigo:Amigo=[nombre, estado];
    amigos.push(nuevoAmigo);
    console.log(`Amigo agregado con exito`);
}

function listarAmigos(){
    console.log(`Amigos: `);
    amigos.forEach(a=>{
        console.log(`${a[0]}\n ~${a[1]? `En linea` : `Desconectado`}`);
    });
}

function verEstado(){
    setInterval(()=>{
        amigos.forEach(a=>{
            if(a[1]){
                console.log(`${a[0]} esta en linea`);
            }
        });
    }, 5000);
}

function cambiarEstado(nombre:string){
    amigos.forEach(a=>{
        if(a[0]===nombre){
            if(a[1]){
                a[1]=false;
            }else{
                a[1]=true;
            }
        }
    });
}

agregarAmigo(`Kevin`, false);
agregarAmigo(`Mateo`, true);
listarAmigos();
verEstado();
setTimeout(()=>{
    cambiarEstado(`Mateo`);
    cambiarEstado(`Kevin`);
},5000);