/*Declara una variable global llamada horaActual (puedes asignarle un valor
fijo). Crea una función declarada llamada mostrarSaludo que imprima
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o
"Buenas noches" en cualquier otro caso*/

let dia= new Date;
let horaActual= dia.getHours;
//let horaActual=16;
//console.log(dia);

function mostrarSaludo(hora){
    if(hora<12){
        console.log(`Buenos días `);
    }else if(hora>12 && hora<18){
        console.log(`Buenas tardes `);
    }else {
        console.log(`Buenas noches `);
    }
}

let saludo=mostrarSaludo(horaActual);
