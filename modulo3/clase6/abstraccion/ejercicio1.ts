interface Bebida{
    preparar():void;
}
class Cafe implements Bebida{
    preparar(): void {
        console.log(`Preparando cafe: Poniendo a moler los granos, Agregando la molida a la maquina, preparado...`);
    }
}

class Te implements Bebida{
    preparar(): void {
        console.log(`Preparando te: poniendo sauito de te, agregando el agua caliente`);
    }
}

let tuCafe= new Cafe();
let miTe=new Te();

tuCafe.preparar();
miTe.preparar();