type Cuenta=[string, number, boolean];
let cuentas:Cuenta[]=[];

function agregarCuenta(nombre:string, saldo:number, estado:boolean){
    const nuevaCuenta:Cuenta=[nombre,saldo,estado];
    cuentas.push(nuevaCuenta);
    console.log(`Cuenta añadida`);
}

function transferencia(salida:number, entrada:number, monto:number){
    setTimeout(()=>{
        if(cuentas[salida]&&cuentas[entrada]){
            if(cuentas[salida][1]>=monto){
                cuentas[salida][1]-=monto;
                cuentas[entrada][1]+=monto;
                console.log(`Transferencia exitosa`);
            }else{
                console.log(`Error, el monto a trnsferir supera el saldo disponible`);
            }
        }else{
            console.log(`Error, unaa de las cuentas no se encuentra`);
        }
    }, 8000);
}

function listarCuentas(){
    console.log(`Cuentas disponibles: `);
    cuentas.forEach(c=>{
        console.log(`${c[0]}\n  ~$${c[1]}\n  ~Activo/a: ${c[2]}`);
    });
}

agregarCuenta(`Roxana`, 5000, true);
agregarCuenta(`Nahuel`, 8000, true);
listarCuentas();
transferencia(1, 0, 800);
setTimeout(()=>{
    listarCuentas();
}, 8000);