/*Escribe una función que reciba un array de números y devuelva el
promedio.*/
let calcularPromedio=(calificaciones)=>{
    let promedio=0;
    let acum=0;
    for(let i=0;i<calificaciones.length;i++){
        acum=acum+calificaciones[i];
    }
    promedio=acum/calificaciones.length;
    return promedio;
}

let calificaciones=[8, 9, 10, 7, 6];
console.log(calcularPromedio(calificaciones));