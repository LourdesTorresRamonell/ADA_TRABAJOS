function prepararPedido(nombre:string, tiempo:number, callback:()=>void):void{
    console.log(`el plato esta siendo preparado... `);

    setTimeout(()=>{
        console.log(`El plato ${nombre} esta listo`);
        callback();
    }, tiempo);
}

function completado():void{
    console.log(`Todos los pedidos se encuentran completos`);
}

prepararPedido(`Panchos`, 4000, ()=>{
    prepararPedido(`Fideos con queso`, 2000, ()=>{
        prepararPedido(`Arroz con huevo frito`, 1000, ()=>{
            completado();
        });
    });
});