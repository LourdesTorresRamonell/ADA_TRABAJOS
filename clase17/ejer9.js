/*Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
mismo del ejercicio anterior (buscar la posición de un número en un
array), pero partiendo de esta lista:
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
a mayor, utilizando bubble sort. Luego, respondan las siguientes
preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?*/
const prompt = require('prompt-sync')({ sigint: true });

let lista=[12, 3, 5, 7, 1, 22, 47, 100];

function bubbleSort(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

function busquedaBinaria(lita, numero) {
    
    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === numero) {
            return medio+1; 
        } else if (lista[medio] < numero) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1; 
}

let ordenados = bubbleSort(lista);

let numero=Number(prompt(`Ingrese el numero que quiere buscar `));
if(busquedaBinaria(ordenados,numero)!==-1){
    console.log(`el número se encuentra en la posicion ${busquedaBinaria(lista,numero)}`);
}else{
    console.log(`El número no se encuentra en la lista`);
}