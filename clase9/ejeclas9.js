
const prompt = require ("promp-sync")({ sigint: true }) 

let numero1 = parseInt(prompt" Ingrese un numero"); 
let numero2 = parseInt(prompt" Ingrese un segundo numero");

if (numero1==numero2) console.log(" el primer numero:" + numero1, "es igual al segundo:" + numero2);
else if (numero1>numero2) console.log ("el primer numero:"+ numero1 ,"es mayor que el segundo:"+ numero2);
else console.log ("el primer numero:" + numero1 ,"es menor que el segundo");
 