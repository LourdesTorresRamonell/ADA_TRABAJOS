abstract class Producto{
    constructor(public nombre:string, public precio:number){}
    descripcion():string{
        return `El producto ${this.nombre} sale $${this.precio}`;
    }

    abstract Descuento():number;
}
 
class Electronico extends Producto{
    constructor(nombre:string, precio:number, public garantia:number){
        super(nombre, precio);
    }
    
    mostrarGarantia():void{
        console.log(this.garantia);
    }

    Descuento(): number {
        return 0;
    }
}

class Alimento extends Producto{
    constructor(nombre:string, precio:number, protected expiracion: Date){
        super(nombre, precio);
    }

    mostrarExpiracion():void{
        console.log(this.expiracion);
    }

    Descuento():number{
        let diasRestantes=Math.ceil((this.expiracion.getTime()-Date.now())/(1000*3600*24));
        return diasRestantes<10 ? this.precio*0.10 : 0;
    }
}

class OrdenCompra{
    protected productos:Producto[]=[];
    agregarProducto(producto:Producto):void{
        this.productos.push(producto);
    }
    
    total():number{
        return this.productos.reduce((total, producto)=>total+(producto.precio-producto.Descuento()), 0);
    }

    mostrarDescripcion():string{
        let lista=this.productos.map(p=>p.descripcion()).join(`\n`);
        return `*Carrito: \n${lista}\n*Total: $${this.total()}`;
    }
}

let miCarrito=new OrdenCompra();
let papas=new Alimento(`Papas`, 100, new Date(Date.now() + 15*24*60*60*1000));
let celular=new Electronico(`Celular`, 10000, 12);

miCarrito.agregarProducto(papas);
miCarrito.agregarProducto(celular);

//papas.mostrarExpiracion();

console.log(miCarrito.mostrarDescripcion());