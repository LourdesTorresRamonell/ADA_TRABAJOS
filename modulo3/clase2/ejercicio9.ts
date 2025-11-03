let auto={
    marca:`Ford`,
    modelo:`Raptor`,
    encendido:false
};

function encenderAuto(auto:{marca:string, modelo:string, encendido:boolean}):void{
    auto.encendido=true;
};

console.log(auto);
console.log(`Encenderemos el coche...`);
encenderAuto(auto);
console.log(auto);