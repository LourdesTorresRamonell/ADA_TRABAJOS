/*Escribe una función que reciba un objeto con platos y precios, y devuelva
los platos cuyo precio sea menor a $20.*/

let platosBaratos=()=>{
    let platos=[];
     for (let plato in menu) {
            if (menu[plato] < 20) {
                platos.push(plato); // agregamos el nombre del plato
            }
        }
    return platos;
}

let menu={
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta":18
};
console.log(platosBaratos());