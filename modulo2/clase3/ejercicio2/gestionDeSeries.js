/*onsigna: ¡Es hora de organizar tus series favoritas! Crea un programa
que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y
la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la
cantidad de temporadas de una serie.
Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.
• ¿Qué es fs.existsSync()?
• El método fs.existsSync() es parte del módulo fs (file system) en
Node.js. Este método se usa para comprobar si un archivo o
directorio existe en el sistema de archivos de manera sincrónica, lo
que significa que el código se ejecuta y espera a que la operación se
complete antes de continuar con el siguiente paso.
• Sintaxis: fs.existsSync(path)*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./listadoDeSeries.json';

const leerSerie=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirSerie=(series)=>{
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
};

const agregarSeries=(nombreSerie, temporadas)=>{
    const series=leerSerie();
    series.push({ id: series.length + 1, nombre: nombreSerie, temporadas: parseInt(temporadas) });
    escribirSerie(series);
    console.log(`Serie agregado:"${nombreSerie}"`);
};

const listarSeries=()=>{
    const series=leerSerie(); 
    console.log('Lista de series favoritos:');
    series.forEach(serie=>{
        console.log(`${serie.id}. ${serie.nombre}
            Temporadas: ${serie.temporadas}`);
    });
};

const cambiarTemporadas=(idDeSeri, nuevaTemporada)=>{
      const series = leerSerie();
    const serie = series.find(s => s.id === idDeSeri); 
    if (serie) {
        serie.temporadas = parseInt(nuevaTemporada);
        escribirSerie(series); 
        console.log(`Serie actualizada: ${serie.nombre}, nuevas temporadas: ${serie.temporadas}`);
    } else {
        console.log('Serie no encontrada.');
    }
};


let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar nueva serie
    2- Cambiar número de temporadas `))
if(menu===1){    
    let nombre=prompt(`Ingrese el nombre de la serie que desea agregar a la lista `)
    let temporadas=Number(prompt(`Ingrese el numero de temporadas que tiene la serie `))
    agregarSeries(nombre, temporadas);
    listarSeries();
}else if(menu===2){
    let idDeSeri=Number(prompt(`Ingrese el número de la serie que desea cambiar de temporada `));
    let nuevaTemporada=Number(prompt(`Ingrese el nuevo número de temporadas `));
    if(isNaN(idDeSeri) || isNaN(nuevaTemporada)){
        console.log(`Error: uno de los ingresos no es un número`);
    }else{
        cambiarTemporadas(idDeSeri, nuevaTemporada);
    }
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}