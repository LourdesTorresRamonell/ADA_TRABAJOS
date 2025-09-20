const readlineSync=require(`readline-sync`);
const crypto=require(`crypto`);
let opcion;

let generarHash=(texto)=>{
    return crypto.createHash(`sha256`).update(texto).digest(`hex`);
}

do{
    opcion=readlineSync.questionInt(`Elige una opcion: 
        1- Ver mensaje de bienvenida
        2- Crear hash de un texto
        0- Salir  `);
    
    switch(opcion){
        case 1: 
            console.log(`Bienvenido al sistema`);
            break;
        case 2:
            const texto=readlineSync.question(`Ingresa el texto para general el texto: `);
            const hash=generarHash(texto);
            console.log(`El hash SHA-256 de ${texto} es: ${hash}`);
            break;
        case 0: 
            console.log(`Saliendo del programa`);
            break;
        default:
            console.log(`No se ingreso una de las opciones `);
    }
}while(opcion !== 0);
