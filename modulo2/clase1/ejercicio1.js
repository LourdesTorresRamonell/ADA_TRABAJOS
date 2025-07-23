/*Tienes un parque de diversiones que permite la entrada a personas
mayores de 12 años y menores de 60. Escribe una función que reciba una
lista de edades y devuelva cuántas personas pueden entrar al parque.*/
let contarPersonasQuePuedenEntrar=(edades)=>{
    let contador=0;
    for(let i=0;i<edades.length;i++){
        if(edades[i]>=12 && edades[i]<60){
            contador++;
        }
    }
    return contador;
}

let edades=[10, 15, 35, 65, 12, 59];
console.log(contarPersonasQuePuedenEntrar(edades));