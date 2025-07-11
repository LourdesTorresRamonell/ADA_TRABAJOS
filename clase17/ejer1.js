/*Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto
investiga sobre el método “toUpperCase()”
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas.*/
const prompt = require('prompt-sync')({ sigint: true });

let estudiante={
    nombre: `Ambar Smith`,
    edad:18,
    notas:[10, 9, 8, 10, 9],
}
let procesarEstudiante=()=>{
    let nuevaNota=Number(prompt(`Escribe la nota que deseas agregar a la estudiante `));
    estudiante.notas.push(nuevaNota);
    estudiante.notas.shift();
    estudiante.Promedio=(estudiante.notas.reduce((acum,num)=>acum+num))/estudiante.notas.length;
    estudiante.nombre=estudiante.nombre.toUpperCase();
    console.log(estudiante);
}

procesarEstudiante();