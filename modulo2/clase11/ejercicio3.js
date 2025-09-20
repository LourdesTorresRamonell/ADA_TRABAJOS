const readlineSync=require(`readline-sync`);
let numero1=parseFloat(readlineSync.question(`Ingrese un numero: `));
let numero2=parseFloat(readlineSync.question(`Ingrese otro numero: `));
let operacion=readlineSync.question(`Ingrese la operacion que desea realizar `);

switch(operacion){
    case `+`:
        console.log(`La suma de ${numero1} y ${numero2} da: ${numero1+numero2}`);
        break;
    case `-`:
        console.log(`${numero1} menos ${numero2} da: ${numero1-numero2}`);
        break;
    case `*`:
        console.log(`Multiplicar ${numero1} por ${numero2} da: ${numero1*numero2}`);
        break;
    case `/`:
        console.log(`${numero1} dividido ${numero2} da: ${numero1/numero2}`);
        break;
}