/*Escribe una función que reciba un nombre completo y devuelva las
iniciales en mayúsculas.*/
let generarIniciales=(nombre)=>{
    let nombreSeparado=nombre.split(` `);
    nombreSeparado=nombreSeparado.map(nombre=>nombre.trim());
    let iniciales=[]; 
    for(let i=0;i<nombreSeparado.length;i++){
        iniciales.push(nombreSeparado[i][0].toUpperCase());
    }
    return iniciales.join("");
}

let nombre="Juan perez gomez";
console.log(generarIniciales(nombre));