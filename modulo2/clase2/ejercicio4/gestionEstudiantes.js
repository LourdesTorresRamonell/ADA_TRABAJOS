/* Importa el array desde estudiantes.js.
o Muestra en la consola los nombres de todos los estudiantes.
o Calcula y muestra el promedio de notas de un estudiante
específico.
o Agrega un nuevo estudiante al array y muestra el array
actualizado en formato JSON*/

const estudiantes = require('./estudiantes');
estudiantes.forEach(est => console.log(`${est.nombre}`));

const calcularPromedio = notas => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const nombreEstudiante = 'Ambar';
const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
if (estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    console.log(`El promedio de ${nombreEstudiante} es: ${promedio.toFixed(2)}`);
} else {
    console.log(`El estuduiante ${nombreEstudiante} no se encuentra en la lista`);
}

estudiantes.push({ nombre: 'Jim', edad: 16, curso: 'Cosmetologia', notas: [10, 7, 9, 9] });

console.log('Lista actualizada:');
console.log(JSON.stringify(estudiantes, null, 2));