/*Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y
muéstrala. Finalmente, muestra la lista actualizada.*/
let fila=["Perro", "Gato", "Conejo"];
fila.unshift("Hámster");
console.log(fila);
let atender=fila.shift();
console.log(`Pase ${atender} al consultorio `);
console.log(`Pacientes en espera ${fila}`);