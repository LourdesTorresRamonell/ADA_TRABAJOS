class Torta{
    nombre:string;
    tipo:string;
    constructor(nombre:string, tipo:string){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    hacerDescripcion():void{
        console.log(`Torta: ${this.nombre}`);
        console.log(`Tipo: ${this.tipo}`);
    }
}

class TortaChocolate extends Torta{
    constructor(nombre:string){
        super(nombre, `Chocolate`);
    }
    hacerDescripcion(): void {
        console.log(`Soy una torta de chocolate deliciosa y suave`);
    }
}

let laTorta= new TortaChocolate(`Aniversario`);
laTorta.hacerDescripcion();