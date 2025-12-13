class Coche{
    private _marca:string;
    private _modelo:string;
    private _año:number;
    private _kilometraje:number;

    constructor(marca:string, modelo:string, año:number){
        if(año<1886){
            console.log(`El auto no puede ser de antes de 1886`);
            this._año=1886;
        }else{
            this._año=año;
        }
        this._marca=marca;
        this._modelo=modelo;
        this._kilometraje=0;
    }
    
    public encender():void{
        console.log(`El auto de marca: ${this._marca} y modelo:${this._modelo} se encendio`);
    }

    public realizarViaje(km:number):void{
        if(km<0){
            console.log(`Error el kilometraje no puede ser menor a 0`);
        }else{
            this._kilometraje +=km;
            console.log(`El auto recorrio ${km} km. El kilometraje total del auto es de: ${this._kilometraje} km`);
        }
    }
    public get kilometraje():number{
        return this._kilometraje;
    }
}

let miAuto=new Coche(`Ford`, `Raptor`, 2009);
miAuto.encender();
miAuto.realizarViaje(500);
miAuto.realizarViaje(200);
console.log(`Kilometraje actual de tu vehivulo: ${miAuto.kilometraje} km`);