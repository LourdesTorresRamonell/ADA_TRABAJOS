class Flor{
    describir():void{
        console.log(`Es una hermosa flor`);
    }
}

class Rosa extends Flor{
    describir(): void {
        console.log(`Una hermosa flor roja, una roja rosa`);
    }
}

class Girasol extends Flor{
    describir(): void {
        console.log(`Una hermosa flor de petalos amarrillos y centro marron, un girasol`);
    }
}

let miFlor=new Rosa();
let tuFlor=new Girasol();
miFlor.describir();
tuFlor.describir();