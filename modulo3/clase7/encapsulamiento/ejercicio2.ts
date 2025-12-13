class Libro{
    private _titulo:string;
    private _autor:string;
    private _añoPublicacion:number;
    private _disponible:boolean;
    constructor(titulo:string, autor:string, año:number){
        this._titulo=titulo;
        this._autor=autor;
        this._añoPublicacion=año;
        this._disponible=true;
    }

    public prestar():void{
        if(this._disponible){
            console.log(`Estas prestando el libro: ${this._titulo}`);
            this._disponible=false;
        }else{
            console.log(`Error, no puedes prestar este libro porque no esta disponible`);
        }
    }
    
    public devolver():void{   
        if(this._disponible){
            console.log(`Error, el libro no ha sido prestado`);
        }else{
            console.log(`Gracias por devolver: ${this._titulo}`);
            this._disponible=true;
        }
    }

    public get disponible():boolean{
        return this._disponible;
    }
}

let miLibro=new Libro(`Still Whit You`, `Lily Del Pilar`, 2021);
console.log(`Se encuentra disponible: ${miLibro.disponible}`);
miLibro.prestar();
console.log(`Se encuentra disponible: ${miLibro.disponible}`);
miLibro.devolver();
console.log(`Se encuentra disponible: ${miLibro.disponible}`);