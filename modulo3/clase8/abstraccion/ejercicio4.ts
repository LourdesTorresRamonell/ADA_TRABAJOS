abstract class Publicacion{
    constructor(public titulo:string, public autor:string, public año:number ){}

    descripcion():string{
        return `~Titulo: ${this.titulo}\n~Autor: ${this.autor}\n~Año de publicacion: ${this.año}`;
    }
}

class Libro extends Publicacion{
    constructor(nombre:string, autor:string, año:number){
        super(nombre,autor,año);
    }
    descripcion(): string {
        return `Libro:\n${super.descripcion()}`
    }
}

class Revista extends Libro{
    constructor(titulo:string, autor:string, año:number){
        super(titulo,autor,año);
    }
    descripcion(): string {
        return `Revista:\n${super.descripcion()}`;
    }
}
class Usuario{
    constructor(public usuario:string){};

    describir():string{
        return `Ususario: ${this.usuario}`;
    }
}

class Biblioteca{
    protected publicaciones:Publicacion[]=[];
    protected prestamo:Map<Usuario, Publicacion[]>=new Map(); 
    
    agregarPublicacion(publicacion:Publicacion):void{
        this.publicaciones.push(publicacion);
    }

    prestar(publicacion:Publicacion, ususario:Usuario):void{
        if(!this.prestamo.has(ususario)){
            this.prestamo.set(ususario, []);
        }
        this.prestamo.get(ususario)!.push(publicacion);
    }

    devolverPrestamo(publicacion:Publicacion, ususario:Usuario):void{
        let publicaciones=this.prestamo.get(ususario)!;
        let index=publicaciones.indexOf(publicacion);
        if(!this.prestamo.has(ususario)){
            throw new Error(`Este usuario no tiene prestamos para devolver`);
        }
        if(index===-1){
            throw new Error(`Este usuario no tiene esa publicacion`);
        }
        publicaciones.splice(index,1);
    }

    mostrarLosPrestamos():string{
        let lista=`Prestamos  actuales:\n`;
        this.prestamo.forEach((p, u)=>{
            lista+=`~${u.describir()} tiene:\n`;
            p.forEach(p=>{
                lista+=`*${p.descripcion()}\n\n`;
            });
        });
        return lista;
    }
}

let biblioteca=new Biblioteca();
let libro1=new Libro(`Still Whit You`, `Lily Del Pilar`, 2021);
let revista1=new Revista(`Glamuor`, `Varios`, 2000);
//console.log(libro1.descripcion());
let usuario1=new Usuario(`Lourdes Torres`);

biblioteca.agregarPublicacion(libro1);
biblioteca.prestar(libro1, usuario1);
biblioteca.agregarPublicacion(revista1);
biblioteca.prestar(revista1,usuario1);

console.log(biblioteca.mostrarLosPrestamos());

biblioteca.devolverPrestamo(revista1, usuario1);
console.log(biblioteca.mostrarLosPrestamos());