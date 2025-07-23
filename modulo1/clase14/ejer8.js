/*Creá la función backEnd() que recibirá 2 números como parámetros. La
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
en cuenta los siguientes criterios:
✔ Si el número a imprimir es múltiplo del primer parámetro que se
ingresó, deberá mostrar el string “Back” en lugar del número.
✔ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
deberá mostrar el string “End” en su lugar del número.
✔ Si el número a imprimir es múltiplo de ambos parámetros, deberá
mostrar el string “Back End” en lugar del número*/
const prompt = require('prompt-sync')({ sigint: true });


function backEnd(back,end){
    let numeros=[];
    let resto1=0;
    let resto2=0;
    for(let i=1;i<=100;i++){
        resto1=i%back;
        resto2=i%end;
        if(resto1===0 && resto2===0){
            numeros.push(`Back End`);
        }else if(resto1===0 && resto2!=0){
            numeros.push(`Back`);
        }else if(resto1!=0 && resto2===0){
            numeros.push(`End`);
        }else {
            numeros.push(i);
        }
    }
    console.log(numeros)
}

let numero1=Number(prompt(`Ingrese un número `));
let numero2=Number(prompt(`Ingrese otro número `));

if(isNaN(numero1) || isNaN(numero2)){
    console.log(`Error: alguno de los ingresos no fue un número `);
}else{
    backEnd(numero1,numero2);
}