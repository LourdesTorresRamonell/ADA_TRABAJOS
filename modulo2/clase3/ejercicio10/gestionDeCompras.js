/*Consigna: Crea un programa que registre las compras realizadas. El
programa debe permitirte:
1. Agregar una compra: Registrar una compra con su nombre y
precio.
2. Listar las compras: Mostrar todas las compras registradas.
3. Eliminar una compra: Eliminar una compra de la lista.*/


const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./listaDeCompras.json';

const leerCompras=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirCompra=(compras)=>{
    fs.writeFileSync(filePath, JSON.stringify(compras, null, 2));
};

const agregarCompra=(producto, precio)=>{
    const compras=leerCompras();
    compras.push({ id: compras.length + 1, producto, precio});
    escribirCompra(compras);
    console.log(`Compra agregada`);
};

const listarCompras=()=>{
    const compras=leerCompras(); 
    console.log('Lista de compras:');
    compras.forEach(compra=>{
        console.log(`${compra.id}. ${compra.producto}
            ${compra.precio}`);
    });
};

const eliminarCompra=(idDeCompra)=>{
    let compras=leerCompras();
    compras=compras.filter(c=>c.id !== idDeCompra);
    escribirCompra(compras);
    console.log(`Compra eliminada`);
};


let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar una nueva compra
    2- Eliminar una compra `))
if(menu===1){    
    let producto=prompt(`Ingrese el producto comprado `);
    let precio=prompt(`Ingrese el precio del producto `);
    agregarCompra(producto, precio);
    listarCompras();
}else if(menu===2){
    let idDeCompra=Number(prompt(`Ingrese el número de compra a eliminar `));
    eliminarCompra(idDeCompra);
    listarCompras();
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}