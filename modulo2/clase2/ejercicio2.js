/*Crea un objeto en JavaScript que represente a un estudiante con las
siguientes propiedades: nombre, edad, curso, notas (un array de
números).
Instrucciones:
• Convierte este objeto a una cadena JSON usando JSON.stringify().
• Muestra la cadena JSON en la consola.
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando
JSON.parse() y muestra el objeto en la consola.*/
let estuiante={
    nombre:"Luna Rodrigez",
    edad:16,
    curso:"Progarmacion web",
    notas:[10, 7, 8, 7, 8]
}

let estudianteJSON = JSON.stringify(estuiante); 
console.log("\nMostramos estudiante como JSON:\n", estudianteJSON);
let estudianteObj = JSON.parse(estudianteJSON); 
console.log("\nMostramos estudiante como objeto:\n", estudianteObj);  