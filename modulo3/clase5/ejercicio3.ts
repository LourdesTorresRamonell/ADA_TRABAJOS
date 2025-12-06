class Animal{
    nombre:string;
    tipo:string;
    constructor(nombre:string, tipo:string){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    hacerSonido():void{
        console.log(`${this.nombre} esta haciendo sonidos`);
    }
}

let perro=new Animal(`Negro`, `perro`);
perro.hacerSonido();
let gato=new Animal(`Celeste`, `gato`);
gato.hacerSonido();