/*A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()”
4. Verifique si existe un producto con precio mayor a 50. Para esto
investigar el método “.some()”
5. Devuelva una cadena de nombres de productos separados por
comas.*/
const prompt = require('prompt-sync')({ sigint: true });

let productos=[
    {nombre: `fideos`, precio:50},
    {nombre: `chupetin`, precio:10},
    {nombre: `leche`, precio:30},
    {nombre: `salchichas`, precio:60}
]

let gestionarProductos=()=>{
    let nuevoProducto={nombre: `cereales`, precio:35};
    productos.push(nuevoProducto);
    productos.pop();
    let ProductoABuscar=prompt(`Ingrese el producto que desea buscar `).trim();
    let indice=productos.findIndex(producto=>producto.nombre===ProductoABuscar);
    if(indice!== -1){
    console.log(`Índice del producto ${ProductoABuscar}:`, indice);        
    }else{
        console.log(`El producto no se encuentra`);
    }
    if(productos.some(producto=>producto.precio>50)){
        console.log(`Hay productos con precio mayor a 50`);
    }else{
        console.log(`No hay productos con precio mayor a 50`);
    }
    let nombreDeProductos=productos.map(producto=>producto.nombre).join(`, `);
    console.log(nombreDeProductos);
}

gestionarProductos();