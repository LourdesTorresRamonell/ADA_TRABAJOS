/*Consigna: Crea un programa para llevar el control de un inventario. El
programa debe permitirte:
1. Agregar un producto: Registrar un producto con su nombre y
cantidad disponible.
2. Listar los productos: Mostrar todos los productos registrados.
3. Actualizar la cantidad de un producto: Modificar la cantidad de
un producto en el inventario.*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./listadoDeProductos.json';

const leerInventario=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirInventario=(productos)=>{
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
};

const agregarProductos=(producto, cantidad)=>{
    const productos=leerInventario();
    productos.push({ id: productos.length + 1, nombre: producto, existencias: parseInt(cantidad) });
    escribirInventario(productos);
    console.log(`Producto agregado: "${producto}"`);
};

const listarInventario=()=>{
    const productos=leerInventario(); 
    console.log('Lista de productos:');
    productos.forEach(producto=>{
        console.log(`${producto.id}. ${producto.nombre}
            Cantidad: ${producto.existencias}`);
    });
};

const cambiarExistencia=(idDeProducto, nuevaCantidad)=>{
    const productos=leerInventario();
    const producto=productos.find(p => p.id === idDeProducto); 
    if (producto) {
        producto.existencias=parseInt(nuevaCantidad);
        escribirInventario(productos); 
        console.log(`Producto actualizado: ${producto.nombre}, nueva cantidad: ${producto.existencias}`);
    } else {
        console.log('Producto no encontrado');
    }
};


let menu=Number(prompt(`Ingrese el número de opcion que desee:
    1- Agregar un nuevo producto
    2- Cambiar existencias del producto `))
if(menu===1){    
    let nombre=prompt(`Ingrese el nombre del producto nuevo `)
    let existencias=Number(prompt(`Ingrese la cantidad de existencias del producto `))
    agregarProductos(nombre, existencias);
    listarInventario();
}else if(menu===2){
    let idDeProducto=Number(prompt(`Ingrese el número del productoa a modificar `));
    let nuevaCantidad=Number(prompt(`Ingrese el nuevo número de existencias `));
    if(isNaN(idDeProducto) || isNaN(nuevaCantidad)){
        console.log(`Error: uno de los ingresos no es un número`);
    }else{
        cambiarExistencia(idDeProducto, nuevaCantidad);
    }
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}