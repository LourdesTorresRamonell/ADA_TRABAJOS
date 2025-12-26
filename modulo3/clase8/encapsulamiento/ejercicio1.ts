class Bodega{
    private _nombre:string;
    private _direccion:string;
    private _inventario:{producto:string, cantidad:number}[];
    constructor(nombre:string, direccion:string){
        this._nombre=nombre;
        this._direccion=direccion;
        this._inventario=[];
    }

    agregarProducto(producto:string, cantidad:number):void{
        if(cantidad>0){
            this._inventario.push({cantidad,producto});
            console.log(`Producto agregado al inventario`);
        }else{
            console.log(`Error, la cantidad no puede ser negtiva`);
        }
    }

    eliminarProducto(producto:string):void{
        let index=this._inventario.findIndex(p=> p.producto === producto);
        if(index===-1){
            console.log(`Error: el rpoducto no se encuentra en el inventario`);
        }else{
            this._inventario.splice(index, 1);
            console.log(`El producro se elimino`);
        }
    }

    listarInventario():void{
        console.log(`Inventario de ${this._nombre}`);
        this._inventario.forEach(p=>{
            console.log(`~ ${p.producto} : ${p.cantidad}`);
        })
    }
}

let miBodega=new Bodega(`Merlo Bodega`, `Libertador 14520`);
miBodega.agregarProducto(`Azucar`, 15);
miBodega.agregarProducto(`Cafe`, 20);
miBodega.listarInventario();
miBodega.eliminarProducto(`Cafe`);
miBodega.listarInventario();