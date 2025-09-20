const readlineSync=require(`readline-sync`);

let secreto=Math.floor(Math.random() * 10)+1;
let numero;

do{
    numero=readlineSync.question(`Ingresa un numero del 1 al 10 `);
    if(numero<secreto){
        console.log(`El numero secreto es mayor a ${numero}`);
    }else if(numero>secreto){
        console.log(`El numero secreto es menor ${numero}`)
    }

}while(secreto != numero);

console.log(`Felicitaciones encontrantraste el numero!! `)