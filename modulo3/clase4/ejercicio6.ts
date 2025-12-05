function filtrarElemntos<T>(arreglo:T[]):string[]{
    const resultados:string[]=[];
    for(const elemento of arreglo){
        if(typeof elemento===`string`){
            resultados.push(elemento as string);
        }
    }
    return resultados;
}

let valores:(number|string|boolean)[]=[3235, `Luli`, 1236, false, `realizar tareas`];
console.log(filtrarElemntos(valores));