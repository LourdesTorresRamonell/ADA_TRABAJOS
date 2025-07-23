/*Para este ejercicio deberán definir un objeto literal “deportista”, con los
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto,
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✔ Recibe por parámetro la cantidad de horas.
✔ Resta a su energía (this.energia) la cantidad de horas x 5.
✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va
variando la energía y experiencia del deportista por consola.*/

let deportista={
    nombre: "Mateo",
    energia: 100,
    experiencia: 10,
    entrenarHoras: function(cantidadDeHoras){
        this.energia -= cantidadDeHoras*5;
        this.experiencia += cantidadDeHoras*2;
        console.log(`Al haber entrenado ${cantidadDeHoras}hs, ${this.nombre}:
            bajo la energia a: ${this.energia}
            pero la experinecia subio a: ${this.experiencia}`)
}

}

deportista.entrenarHoras(3);
deportista.entrenarHoras(4);
deportista.entrenarHoras(5);
deportista.entrenarHoras(1);