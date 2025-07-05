/*Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y 
cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. 
Columna 0, día 1, columna 1, día 2, etcétera. 

a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos 
que cada fila representa una semana, es decir, si nos indican semana 2 tenemos
que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre 
en posición 0. 
b)	La aplicación también tendrá una parte de estadísticas, para esto nos 
solicitan dar el total de un día en particular, por ejemplo del día 3, acá 
también tengamos en cuenta lo que ocurre con las filas, ya que las columnas 
también comienzan en 0.
c)	Por último, es necesario tener el total de gastos realizados en el mes.
✔	Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
 resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día 
que más gastos se realizaron.*/
const prompt = require('prompt-sync')({ sigint: true});

function gastosSemanal(matriz,semana){
    let total=0;
    semana=semana-1;
    for(let i=0;i<7;i++){
        total= total+matriz[semana][i];
    }
    console.log(total)
}

function gastosDia(matriz,semana,dia){
    semana=semana-1;
    dia=dia-1;
    console.log(matriz[semana][dia]);
}

function gastosMes(matriz){
    let suma=0
    for(let semana=0;semana<matriz.length;semana++){
        for(let dia=0;dia<matriz[semana].length;dia++){
            suma=suma+matriz[semana][dia];
        }
    }
    console.log(suma);
}

function mayorGastoSemana(matriz){
    let mayor=0
    let totalSemana=0
    let semana=0
    for(let i=0;i<4;i++){
        for(let dia=0;dia<7;dia++){
            totalSemana=semana+matriz[i][dia];
        }
        if(mayor<totalSemana){
            mayor=mayor+totalSemana;
            semana=i+1
        }  
    }
    console.log(`La semana que más gastos hubo fue la: ${semana}`);
    console.log(`El gasto fue de: ${totalSemana}`);
}

function mayorGastoDia(matriz){
    let mayor=0
    let totalDia=0
    let dia
    for(let i=0;i<4;i++){
        for(let dias=0;dias<7;dias++){
        if(mayor<matriz[i][dias]){
            mayor=matriz[i][dias];
            dia=dias+1
        } 
    } 
    }
    console.log(`El dia que mas gastos hubo fue la: ${dia}`);
    console.log(`El gasto fue de: ${mayor}`);    
}

let matriz=[];
let ingreso=0;

for (let fila = 0; fila < 4; fila++) {
    matriz[fila] = [];
    for (let columna = 0; columna < 7; columna++) {
        matriz[fila][columna] = Number(prompt(`Ingrese el gasto para semana ${fila + 1}, día ${columna + 1}: `));
    }
}

let opcion;

do{
    opcion=Number(prompt(`Ingrese la opcion que desea(numero):
    1. Gasto total de una semana
    2. Gasto total de un día 
    3. Gastos total del mes
    4. Semana con mayor gasto
    5. Día con mayor gasto
    0. Salir  `))

    switch(opcion){
        case 1:
            let semana=Number(prompt(`Ingrese el numero de la semana: `));
            gastosSemanal(matriz,semana);
            break;
        case 2:
            let semana2=Number(prompt(`Ingrese la semana: `));
            let dia=Number(prompt(`Ingrese el dia: `));
            gastosDia(matriz,semana2,dia);
            break;
        case 3:
            gastosMes(matriz);
            break;
        case 4: 
            mayorGastoSemana(matriz);
            break;
        case 5:
            mayorGastoDia(matriz);
            break;
        case 0:
            console.log(`Que tenga buen dia.`);
            break;
        default:
            console.log(`Error: se debe ingresar una de las opciones.`);
        break;
    }
}while(opcion!==0);

