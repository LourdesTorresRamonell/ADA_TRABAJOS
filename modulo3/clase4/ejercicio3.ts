function generica<T>(valor:T):T{
    return valor;
}
console.log(generica<string>(`Que onda?`));
console.log(generica<number>(10));