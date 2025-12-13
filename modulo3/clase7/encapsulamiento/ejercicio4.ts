class Avion{
    private _modelo:string;
    private _capacidad!:number;
    private _velocidad!:number;
    constructor(modelo:string, capacidad:number, velocidad:number){
        this._modelo=modelo;
        this.capacidad=capacidad;
        this.velocidad=velocidad;
    }

    public get modelo():string{
        return this._modelo;
    }

    public get capacidad():number{
        return this._capacidad;
    }

    public set capacidad(value:number){
        if(value<0)throw new Error(`La capacidad no puede ser negativa`);
        this._capacidad=value;
    }

    public get velocidad():number{
        return this._velocidad;
    }

    public set velocidad(value:number){
        if(value<0) throw new Error(`La velocidad no puede ser negativa`);
        this._velocidad=value;
    }
}

let avion=new Avion(`Airbus A380`, 100, 600);
console.log(avion.modelo);
console.log(avion.capacidad);
console.log(avion.velocidad);