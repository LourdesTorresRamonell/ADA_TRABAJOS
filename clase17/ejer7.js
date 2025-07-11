/*Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
"Girasol" al inicio de la lista.
Devuelva una cadena de flores en orden alfabético separadas por puntos.*/
let entrada=`Rosa, Tulipán, Orquidea, Lirio`;
let gestionarFloreria=()=>{
    entrada=entrada.replace(`Orquídea`,`Clavel`);
    let separados=entrada.split(`,`);
    separados=separados.map(separado=>separado.trim());
    let existeMargarita=separados.find(separado=>separado===`Margarita`);
    existeMargarita!==undefined
    ?separados.push(`Azucena`)
    :console.log(`Margarita no esta en la lista`);
    indice=separados.indexOf(`Girasol`);
    indice!==-1
    ?console.log(`Girasol se encuentra en el indice: ${indice}`)
    :separados.unshift(`Girasol`);
    entrada=separados.sort().join(`.`);
    console.log(entrada);
}

gestionarFloreria();