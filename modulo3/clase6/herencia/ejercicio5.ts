class Compania{
    private nombre:string;
    protected ingresoAnuales:number;

    constructor(nombre:string, ingrasoAnuales:number){
        this.nombre=nombre;
        this.ingresoAnuales=ingrasoAnuales;
    }
    obtenerNombre():string{
        return this.nombre;
    }
}

class EmpresaTecnologica extends Compania{
    constructor(nombre:string, ingresos:number){
        super(nombre, ingresos);
    }

    ingresosDuplicados():number{
        return this.ingresoAnuales*2;
    }
}

let miEmpresa= new EmpresaTecnologica(`CarpinchoHard`, 100000);
console.log(`Nombre de la empresa: ${miEmpresa.obtenerNombre()}`);
console.log(`Los ingresos anuales duplicados son: ${miEmpresa.ingresosDuplicados()}`);