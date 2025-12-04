import { add, subtract, capitalize, reverse } from "./index";

let cadena:string=`esto es una cadena de texto`;
console.log(`Cadena de texto: ${cadena}
    Primer letra en mayuscula: ${capitalize(cadena)}
    En reverso: ${reverse(cadena)}`);
console.log(`add: ${add(10, 45)}
subtract: ${subtract(12, 15)}`);