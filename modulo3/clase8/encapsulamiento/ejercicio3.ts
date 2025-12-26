class Playlist{
    private _nombre:string;
    private _canciones:string[];
    constructor(nombre:string){
        this._nombre=nombre;
        this._canciones=[];
    }

    agregarCanciones(cancion:string):void{
        let yaEsta=this._canciones.find(c=>c===cancion);
        if(yaEsta!==undefined){
            console.log(`La cancion ya se encontraba en la playlist`);
        }else if(!cancion){
            console.log(`No se puede agregar una cancion vacia`);
        } else{
            this._canciones.push(cancion);
            console.log(`Cancion agregada`);
        }
    }

    eliminarCancion(cancion:string):void{
        const idex=this._canciones.indexOf(cancion);
        if(idex===-1){
            console.log(`La cancion no esta en la playlist`)
        }else{
            this._canciones.splice(idex, 1);
            console.log(`Cancion borrada`);
        }
    }

    listarCanciones():void{
        console.log(`Playlist: ${this._nombre}`);
        this._canciones.forEach(c=>{
            console.log(c);
        })
    }
}

let miPlaaylist=new Playlist(`Kpop`);
miPlaaylist.agregarCanciones(`No More Dream`);
miPlaaylist.agregarCanciones(``);
miPlaaylist.agregarCanciones(`Still Whit You`);
miPlaaylist.agregarCanciones(`No More Dream`);
miPlaaylist.listarCanciones();
miPlaaylist.eliminarCancion(`No More Dream`);