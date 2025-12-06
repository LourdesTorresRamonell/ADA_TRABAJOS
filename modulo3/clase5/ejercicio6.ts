class Coche{
    public marca:string;
    public modelo:string;
    private precio:number;
    constructor(marca:string, modelo:string, precio:number){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }
    public mostrarInfo():string{
        return `Informacion del coche:
        marca: ${this.marca}
        modelo: ${this.modelo}`;
    }
}

let miAuto=new Coche(`ford`, `ranger`, 400000);
console.log(miAuto.mostrarInfo());