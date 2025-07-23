/*Crea una función que reciba una cadena de texto y una letra, y devuelva
cuántas veces aparece esa letra en la cadena.*/
let contarLetra=(string,letra)=>{
    letra=letra.toUpperCase();
    let contador=0;
    for(let i=0;i<string.length;i++){
        if(string[i].toUpperCase()===letra){
            contador++;
        }
    }
    return contador;
}

let texto="Programar es divertido";
console.log(contarLetra(texto,"r"));