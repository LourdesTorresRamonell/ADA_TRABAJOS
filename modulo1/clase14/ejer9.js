/*En este ejercicio, trabajaremos con una lista de modelos de autos.
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que
encuentre y muestre la última posición en la lista donde aparece el modelo
específico de auto dado por modelo.
Datos Iniciales:
✔ Utiliza un array llamado modelosAutos que contiene varios modelos de
autos, algunos repetidos para demostrar la funcionalidad.
Funcionalidad:
✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma
modelo como parámetro (un string).
✔ Debes recorrer el array de manera manual para encontrar la última
aparición del modelo.
✔ Si el modelo se encuentra en el array, la función debe imprimir por
consola la posición (índice + 1) en la que aparece (considerando que la
numeración es de 1 a N).
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que
el modelo no está presente.*/
const prompt = require('prompt-sync')({ sigint: true });

let ultimaAparicionModeloAuto=(modelo)=>{
    let posicion=100;
    for(let i=0;i<modelosAutos.length;i++){
        if(modelo===modelosAutos[i]){
            posicion=i;
        }
    }
    if(posicion===100){
        console.log(`El modelo ${modelo} no se encuentra en la lista`);
    }else{
        console.log(`La ultima apricion del modelo: ${modelo} 
            Fue en la posicion: ${posicion}`);

    }
}

let modelosAutos=["FIAT CRONOS", "VOLKSWAGEN POLO", "VOLKSWAGEN BORA", "PEUGEOT 208", "AUDI A5", 
    "FIAT CRONOS", "RENAULT FLUENCE", "TOYOTA HILUX", "FORD RAPTOR", "FORD FOCUS", "CHEVROLET CRUZE",
    "RENAULT ALASKAN", "NISSAN FRONTIER", "TOYOTA HILUX", "FIAT TORO", "TOYOTA CELICA", "VOLKSWAGEN BORA",
    "FORD MUSTAN", "CITROEN C4", "CITROEN BERLINGO", "MITSUBISHI PAJERO", "CHEVROLET CORVETTE", "FIAT CRONOS"
];

let modelo=prompt(`Ingrse el modelo de auto que desea encontrar `);
let modeloEnMayuscula=modelo.toUpperCase();
ultimaAparicionModeloAuto(modeloEnMayuscula);