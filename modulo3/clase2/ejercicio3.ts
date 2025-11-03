let deportista:{nombre:string, deporte:string, energia:number}={
    nombre:`Mateo`,
    deporte:`Runnig`,
    energia:100
}

function entrenar(deportista: { nombre: string, deporte: string, energia: number }, horas: number):void{
    deportista.energia-=(horas*5);
    console.log(`El deportista ${deportista.nombre}, entreno por ${horas} horas, su energia restente es de ${deportista.energia}`);
}

entrenar(deportista,10);