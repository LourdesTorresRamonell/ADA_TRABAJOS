function saludar(nombre:string, saludo:string="Hola"):string{
    return `${saludo}, ${nombre}`;
}

console.log(saludar(`Lucas`));