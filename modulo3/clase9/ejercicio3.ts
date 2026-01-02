type Poliza=[number, string, number, Date];
let polizas:Poliza[]=[];

function agregarPoliza(id:number, nombre:string, monto:number, renovacion:Date){
    let nuevaPoliza:Poliza=[id, nombre, monto, renovacion];
    polizas.push(nuevaPoliza);
    console.log(`Poliza agregada exitosamente`);
}

function renovarPoliza(indece:number){
    setTimeout(()=>{
        if(polizas[indece]){
            let fechaActualizada=new Date(polizas[indece][3]);
            fechaActualizada.setFullYear(fechaActualizada.getFullYear()+1);
            polizas[indece][3]=fechaActualizada;
            console.log(`Poliza renovada`);
        }else{
            console.log(`Error, no se encuentra la poliza`);
        }
    }, 10000);
}

function listaarPolizas(){
    console.log(`Polizas: `);
    polizas.forEach(p=>{
        console.log(`${p[0]}~ ${p[1]}\n Monto asegurado: $${p[2]}\n Renovacion en: ${p[3]}`);
    });
}

agregarPoliza(1, `Nahuel`, 1000000, new Date(2025, 0, 22));
agregarPoliza(2, `Victor`, 400000, new Date(2024, 1, 12));
listaarPolizas();
renovarPoliza(1);
setTimeout(()=>{
    listaarPolizas();
}, 11000);