class Estudiante{
    private _nombre:string;
    private _edad:number;
    private _claificaciones:number[]
    constructor(nombre:string, edad:number){
        this._nombre=nombre;
        this._edad=edad;
        this._claificaciones=[]
    }

    public agregarCalificacion(calificacion:number):void{
        if(calificacion<0 || calificacion>100){
            console.log(`Error la calificacion debe ser entre 0 y 100`);
        }else{
            this._claificaciones.push(calificacion);
        }
    }

    public calcularPromedio():number{
        if(this._claificaciones.length===0){
            console.log(`No se puede hacer un promedio porque no hay calificaciones`);
            return -1;
        }
        const suma=this._claificaciones.reduce((a,b)=>a+b,0);
        return suma/this._claificaciones.length;
    }

    public get nombre():string{
        return this._nombre;
    }
}

let estudiante=new Estudiante(`Kevin`, 22);
estudiante.agregarCalificacion(75);
estudiante.agregarCalificacion(80);
estudiante.agregarCalificacion(90);
estudiante.agregarCalificacion(99);
console.log(`El estudiante ${estudiante.nombre} tiene de promedio: ${estudiante.calcularPromedio()}`);