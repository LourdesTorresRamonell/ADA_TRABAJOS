/*Crea un programa que solicite al usuario ingresar 5 nombres y los almacene 
en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese 
nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso 
les facilita su desarrollo)*/

const prompt = require('prompt-sync')({ sigint: true});

let nombres=[]
let nombre 

for(i=0;i<5;i++){
    nombre=prompt("Ingrese un nombre ");
    nombres[i]=nombre;
}

nombre=prompt("ingrese el nombre que quiera comprobar ");
let mensaje=0
for(i=0;i<5;i++){
    if(nombre==nombres[i]){
        mensaje=mensaje+1        
    }
}

if (mensaje>0){
    console.log(`El nombre ${nombre} se encuentra en la lista`);
}else{
    console.log(`El nombre ${nombre} no se encuentra en la lista`);
}