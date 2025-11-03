function sumarTodos(...numeros:number[]):number{
    return numeros.reduce((total,num)=>total+num,0);
}

const resultado=sumarTodos(1,5,6,74,6,10);
console.log(`El resultado: ${resultado}`);