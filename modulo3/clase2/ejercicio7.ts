function aumentarSalario(empleado:{nombre:string, salario:number}, porcentaje:number):number{
    empleado.salario+=empleado.salario*(porcentaje/100);
    return empleado.salario;
}

let empleado={
    nombre:`Lola`,
    salario:1000
}

let nuevoSalario=aumentarSalario(empleado, 50);
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`);