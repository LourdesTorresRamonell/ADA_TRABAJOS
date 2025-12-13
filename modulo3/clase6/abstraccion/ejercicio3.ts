interface Usuario{
    nombre:string;
    edad?:number;
    readonly id:number;
}
class UsuarioConcreto implements Usuario{
    constructor(public nombre:string, public id:number, public edad?: number){}
}

const usuario=new UsuarioConcreto(`Luli`, 1);
console.log(usuario.nombre);
//usuario.id=3;