class Producto{
    private _nombre:string;
    private _precio!:number;
    private _cantidad!:number;
    constructor(nombre:string, precio:number, catidad:number){
        this._nombre=nombre;
        this.precio=precio;
        this.cantidad=catidad
    }

    public get nombre():string{
        return this._nombre
    }

    public get precio():number{
        return this._precio
    }

    public set precio(value:number){
        if(value<0)throw new Error(`El precio no puede ser menor a 0`);
        this._precio=value;
    }

    public get cantidad():number{
        return this._cantidad;
    }

    public set cantidad(value:number){
        if(value<0)throw new Error(`La cantidad no puede ser menor a 0`);
        this._cantidad=value;
    }
}

let producto=new Producto(`Mermelada`, 600, 10);
console.log(producto.nombre);
console.log(producto.precio);