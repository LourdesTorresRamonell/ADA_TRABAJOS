class Producto{
    nombre:string;
    precio:number;
    categoria:string;
    constructor(nombre:string, precio:number, categoia:string){
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoia;
    }

    mostrarInfo():void{
        console.log(`Producto: ${this.nombre}\n ${this.categoria}\n $${this.precio} `);
    }
}

class Cosmetico extends Producto{
    constructor(nombre:string, precio:number){
        super(nombre,precio,`Cosmetico`);
    }
    
}

class TratamientoCapilar extends Producto{
    constructor(nombre:string, precio:number){
        super(nombre,precio,`Tratamiento capilar`);
    }

}

class Inventario{
    productos:Producto[];
    constructor(){
        this.productos=[];
    }
    
    agregarProducto(producto:Producto):void{
        this.productos.push(producto);
        console.log(`Producto agregado`);
    }
    
    eliminarProducto(nombreProducto:string):void{
        let index=this.productos.findIndex(p=>p.nombre===nombreProducto);
        if(index===-1){
            console.log(`El producto no se encuentra en el inventario`);
        }else{
            this.productos.splice(index, 1);
            console.log(`Producto eliminado exitosamente`);
        }
    }

    buscarCategoria(categoria:string):void{
        console.log(this.productos.filter(p=>p.categoria===categoria));
    }

    mostrarInvetario():void{
        console.log(`Inventario: `)
        this.productos.forEach(p=>{
            p.mostrarInfo();
        });
    }
}

let inventario=new Inventario();
let rubor=new Cosmetico(`Rubor`, 500);
let tintura=new TratamientoCapilar(`Tintura`, 600);

inventario.agregarProducto(rubor);
inventario.agregarProducto(tintura);
inventario.buscarCategoria(`Cosmetico`);
inventario.mostrarInvetario();
inventario.eliminarProducto(`Tintura`);
inventario.mostrarInvetario();