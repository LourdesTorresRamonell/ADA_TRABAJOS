class Producto{
    constructor(public nombre:string, public precio:number){};
    detallesProducto():void{
        console.log(`Producto: ${this.nombre}\n Precio: $${this.precio} `);
    }
}
interface Envio{
    calcularEnvio():number;
}

class Electronico extends Producto implements Envio{
    constructor(nombre:string, precio:number){
        super(nombre, precio);
    }

    calcularEnvio(): number {
        return this.precio*0.10;
    }

    detallesProducto(): void {
        console.log(`Electronico`);
        super.detallesProducto();
        console.log(`Precio con envio: ${this.precio+this.calcularEnvio()}\n`);
    }
}

class Ropa extends Producto{
    constructor(nombre:string, precio:number, public talle:string){
        super(nombre,precio);
    }
    detallesProducto(): void {
        console.log(`Ropa:`);
        super.detallesProducto();
        console.log(`Talle: ${this.talle}\n`);
    }
}

let producto1=new Ropa(`Remera`, 15000, `L`);
let producto2=new Electronico(`Televicion`, 400000);
producto1.detallesProducto();
producto2.detallesProducto();