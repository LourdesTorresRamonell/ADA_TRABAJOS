class Empleado{
    constructor(protected nombre:string, protected salario:number){}
    calcularSalario():number{
        return this.salario;
    }

    descripcion():void{
        console.log(`Empleado: ${this.nombre}\nSalario: $${this.calcularSalario()}`);
    }
}

interface Beneficios{
    calcularBeneficios():number;
}

class EmpleadoTiempoCompleto extends Empleado implements Beneficios{
    constructor(nombre:string, salario:number){
        super(nombre,salario);
    }

    calcularSalario(): number {
        return this.salario;
    }

    calcularBeneficios(): number {
        return this.salario*0.10
    }

    descripcion(): void {
        super.descripcion();
        console.log(`Beneficios: ${this.calcularBeneficios()}`);
    }

}

class EmpleadoMedioTiempo extends Empleado{
    constructor(nombre: string, salario:number, protected horasDeTabajo:number){
        super(nombre, salario);
        this.horasDeTabajo=horasDeTabajo;
    }

    calcularSalario(): number {
        return this.salario*this.horasDeTabajo;
    }

    descripcion(): void {
        super.descripcion()
    }

}

let empleado1=new EmpleadoTiempoCompleto(`Kevin`, 2000);
let empleado2=new EmpleadoMedioTiempo(`Loudes`, 100, 4);

empleado1.descripcion();
empleado2.descripcion();