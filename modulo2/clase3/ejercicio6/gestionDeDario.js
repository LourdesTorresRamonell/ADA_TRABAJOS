/*Consigna: Crea un programa que te permita gestionar un diario
personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con
la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./Diario.json';

const leerDiario=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirDiario=(entrada)=>{
    fs.writeFileSync(filePath, JSON.stringify(entrada, null, 2));
};

const agregarEntrada=(fecha, escritura)=>{
    const entradas=leerDiario();
    entradas.push({ id: entradas.length + 1, fecha, escritura});
    escribirDiario(entradas);
    console.log(`Entrada agregada:"${fecha}"`);
};

const listarEntradas=()=>{
    const entradas=leerDiario(); 
    console.log('Diario:');
    entradas.forEach(entrada=>{
        console.log(`${entrada.id}. ${entrada.fecha}
            ${entrada.escritura}`);
    });
};

const eliminarEntrada=(idDeEscritura)=>{
    let entradas=leerDiario();
    entradas=entradas.filter(e=>e.id !== idDeEscritura);
    escribirDiario(entradas);
    console.log(`Entrada eliminada`);
};


let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar nueva entrada
    2- Eliminar entrada 
    `));
if(menu===1){    
    let fecha=prompt(`Ingrese la fecha `);
    let escritura=prompt(`Ingrese lo que desee escribir en el diario `);
    agregarEntrada(fecha, escritura);
    listarEntradas();
}else if(menu===2){
    let idDeEscritura=Number(prompt(`Ingrese el número de la escritura a eliminar `));
    eliminarEntrada(idDeEscritura);
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}