/*Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las
siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados
por puntos. Investigar el método “.sort()”*/
const prompt = require('prompt-sync')({ sigint: true });

let listaDeNombres=prompt(`Ingrese una lista de nombres separados por comas: `);

let transformarYAnalizarNombres=()=>{
    let nombres=listaDeNombres.split(',').map(nombre => nombre.trim());
    let contieneJuan=nombres.includes("Juan");
    if(contieneJuan){
        console.log(`Juan es uno de los nombres de la lista `);
    }else{
        console.log(`Juan no es uno de los nombres de la lista`)
    }
    nombres=nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre);
    let indicePedro=nombres.indexOf("Pedro");
    console.log(indicePedro !== -1 ? `Pedro esta en la posicion ${indicePedro}` : "Pedro no esta en la lista de nombres");
    let nombresOrdenados=nombres.sort().join('.');
    console.log("Nombres ordenados alfabeticamente:", nombresOrdenados);

}

transformarYAnalizarNombres();