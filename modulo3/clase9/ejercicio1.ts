type Mueble=[number,string,number];
let inventario:Mueble[]=[];

function agregarMueles(id:number, nombre:string, precio:number){
    let nuevoMueble:Mueble=[id,nombre,precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble agregado`);
}

function listarInventario(){
    console.log(`Inventario: `);
    inventario.forEach(m=>{
        let [id,nombre,precio]=m
        console.log(`${id}- ${nombre}\n  $${precio}`);
    });
}

function actualizarPrecio(id:number, precioNuevo:number){
    setTimeout(()=>{
        let mueble=inventario.find(m=>m[0]===id);
        if(mueble){
            mueble[2]=precioNuevo;
            console.log(`Precio actualizado`);
        }else{
            console.log(`Error, no se encuentra el mueble`);
        }
    }, 3000);
}

agregarMueles(1, `Ropero`, 5000);
agregarMueles(2, `Modular`, 3000);
listarInventario();
actualizarPrecio(2, 3500);
