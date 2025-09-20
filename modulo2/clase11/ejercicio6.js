const readlineSync=require(`readline-sync`);
const listaDeCompras=[];
let continuar=true;

while(continuar){
    const item=readlineSync.question(`Ingresa el articulo que deseas agregar a la lista de compras
        (o "salir" si no deseas agregar nada mas)`);
    if(item.toLocaleLowerCase()===`salir`){
        continuar=false;
    }else{
        listaDeCompras.push(item);
    }
}

console.log(`Lista de Compras: `)
listaDeCompras.forEach((item)=>console.log(`${item}`));