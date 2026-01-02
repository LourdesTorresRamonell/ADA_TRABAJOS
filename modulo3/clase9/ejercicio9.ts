type CoordenadasMapa=[number, number];

interface EntidadMovible{
    moverse():void;
}

class Personaje implements EntidadMovible{
    protected posicion:CoordenadasMapa;
    protected velocidad: number;
    constructor(posicionInicial: CoordenadasMapa, velocidad:number){
        this.posicion=posicionInicial;
        this.velocidad=velocidad;
    }

    moverse(): void{}

    mostrarPosicion():void{
        console.log(`Posicion: ${this.posicion[0]}, ${this.posicion[1]}`);
    }

    actualizarPosicion(x:number, y:number):void{
        this.posicion=[this.posicion[0]+x, this.posicion[1]+y];
    }
}

class PacMan extends Personaje{
    constructor(posicionInicial:CoordenadasMapa){
        super(posicionInicial,1);
    }

    moverse(): void {
        this.actualizarPosicion(this.velocidad, 0);
        console.log(`Pacman se movio`);
        this.mostrarPosicion();
    }

    comerPastilla():void{
        console.log(`Pacman comio una pastilla`);
    }
}

class Fantasma extends Personaje{
    private color:string;
    constructor(color:string, pocsicionInicial:CoordenadasMapa){
        super(pocsicionInicial, 3);
        this.color=color;
    }

    moverse(): void {
        this.actualizarPosicion(this.velocidad, 0);
        console.log(`El fantasma color ${this.color} se movio`);
        this.mostrarPosicion();
    }

    asustarPacman():void{
        console.log(`El fantasma ${this.color} persige a pacman`)
    }
}

let pacman=new PacMan([0, 0]);
pacman.moverse();
pacman.comerPastilla();

let fantasma1=new Fantasma(`Rosa`, [10, 0]);
fantasma1.moverse();
fantasma1.asustarPacman();