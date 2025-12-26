abstract class Empleado{
    abstract calcularSalario():void;
}

class EmpleadoPorHora extends Empleado{
    constructor(private horas:number, private paga:number){
        super();
    }
    calcularSalario(): void {
        console.log(`Salario calculado: ${this.horas*this.paga}`);
    }
}

class EmpleadoFijo extends Empleado{
    constructor(private paga:number){
        super();
    }
    calcularSalario(): void {
        console.log(`Salario calculado: ${this.paga}`);
    }
}

let empleado1=new EmpleadoFijo(4500);
let empleado2=new EmpleadoPorHora(4, 700);
empleado1.calcularSalario();
empleado2.calcularSalario();