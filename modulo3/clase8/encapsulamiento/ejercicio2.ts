class Empleado{
    private _nombre:string;
    private _salario:number;
    private _departamento:string;
    constructor(nombre:string, salario:number, departamento:string){
        this._nombre=nombre;
        this._salario=salario;
        this._departamento=departamento;
    }

    modificarSalario(nuevoSalario:number):void{
        if(nuevoSalario<=0){
            console.log(`Error: el salario no puede ser menor a 1`);
        }else{
            this._salario=nuevoSalario;
    
        }
    }

    infoEmpleado():void{
        console.log(`Empleado: ${this._nombre}\nSalario:${this._salario}\nDepartamento:${this._departamento}`);
    }
}

let empleado1=new Empleado(`Sara`, 200, `RRHH`);
empleado1.infoEmpleado();
empleado1.modificarSalario(600);
empleado1.infoEmpleado();