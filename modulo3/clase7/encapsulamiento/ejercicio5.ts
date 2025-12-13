class Vacacion{
    private _destino:string;
    private _duracion!:number;
    private _presupuesto!:number;
    constructor(destino:string, duracion:number, presupuesto:number){
        this._destino=destino;
        this.duracion=duracion;
        this.presupuesto=presupuesto;
    }
    public get destino():string{
        return this._destino;
    }

    public get duracion():number{
        return this._duracion;
    }

    public set duracion(value: number){
        if(value<1) throw new Error(`Las vacaciones no pueden durar menos de 1 dia`);
        this._duracion=value;
    }

    public get presupuesto():number{
        return this._presupuesto;
    }

    public set presupuesto(value:number){
        if(value<=0)throw new Error(`El presupuesto no puede ser menor a 1`);
        this._presupuesto=value;
    }
}

let misVacaciones=new Vacacion(`Santa Teresita`, 14, 9000);
console.log(`Destio: `, misVacaciones.destino);
console.log(`Duracion: `, misVacaciones.duracion);