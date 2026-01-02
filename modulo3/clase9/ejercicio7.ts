function invertir<T,U>(tupla:[T,U]):[U,T]{
    return [tupla[1], tupla[0]];
}

console.log(invertir([`Mundo`, `Hola`]));