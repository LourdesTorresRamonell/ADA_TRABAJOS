const readlineSync=require(`readline-sync`);
const preguntas=[
    {pregunta: `Cuantas horas tiene un dia?`, respuesta: `24`},
    {pregunta: `Que se festaja en Argentina el 20 de junio?`, respuesta: `dia de la bandera`},
    {pregunta: `Como se llama la flor nacional de Argentina?`, respuesta: `ceibo`},
    {pregunta: `Como se llama el ave nacional de Argentina?`, respuesta: `hornero`},
    {pregunta: `Cual es el nombre de la montania mas alta de Argentina?`, respuesta: `aconcagua`},
    {pregunta: `Como se llama la ruta nacional mas larga de Argentina?`, respuesta: `ruta nacional 40`}
];
let aciertos=0;

preguntas.forEach((pregunta)=>{
    const respuestaDelUsuario=readlineSync.question(`${pregunta.pregunta} `).toLowerCase();
    if(respuestaDelUsuario === pregunta.respuesta){
        console.log(`Felicitaciones, acertaste!!`);
        aciertos++;
    }else{
        console.log(`Incorrecto, la repuesta era: ${pregunta.respuesta}`);
    }
});

console.log(`Tuviste ${aciertos}/${preguntas.length} respuestas correctas`);