/*Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por
puntos. Utilizar “.sort()”*/
let entrada=`Toyota, Honda, Ford, Chevrolet, Nissan`;
let gestionarAutos=()=>{
    entrada=entrada.replace(`Ford`,`BMW`);
    let separados=entrada.split(`,`);
    separados=separados.map(marca=>marca.trim());
    let existeTesla=separados.find(separado=>separado===`Tesla`);
    console.log(existeTesla!==undefined?`Tesla existe en la lista`:`Tesla no existe en la lista`);
    indice=separados.indexOf(`Chevrolet`);
    console.log(indice!==-1?`La marca Chevrolet se encuentra en la posicion: ${indice}`:`Chevrolet no existe en la lista`);
    entrada=separados.sort().join(`.`);
    console.log(entrada);
}

gestionarAutos();