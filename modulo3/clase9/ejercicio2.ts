type Pedido=[string, number, string];
let pedidos:Pedido[]=[];

function agregarPedido(nombre:string, cantidad:number, tipo:string){
    let nuevoPedido:Pedido=[nombre, cantidad, tipo];
    pedidos.push(nuevoPedido);
    console.log(`Pedido añadido exitosamente`);
}

function listarPedidos(){
    console.log(`Pedidos pendiente: `);
    pedidos.forEach((p,i)=>{
        console.log(`${i}~ ${p[0]}:\n ${p[1]} ${p[2]}`);
    });
}

function enviarPedido(indice:number){
    setTimeout(()=>{
        if(pedidos[indice]){
            console.log(`El pedido de ${pedidos[indice][0]} se envio correctamente`);
            pedidos.splice(indice,1);
        }else{
            console.log(`Error, no se encuentra el pedido`);
        }
    }, 5000);
}

agregarPedido(`Kevin`, 30, `Rosas`);
agregarPedido(`Claudio`, 10, `Margaritas`);
listarPedidos();
enviarPedido(1);