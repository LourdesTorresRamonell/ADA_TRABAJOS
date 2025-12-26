class Taller{
    private _nombre:string;
    private _dirreccion:string;
    private _servicios:{nombreServicio:string, precio:number, descripcion:string}[]
    private _claificaciones:number[];

    constructor(nombre:string, direccion:string){
        this._nombre=nombre;
        this._dirreccion=direccion;
        this._servicios=[];
        this._claificaciones=[];
    } 

    agregarServicios(nombreServicio:string, precio:number, descripcion:string):void{
        if(!nombreServicio){
            console.log(`Error, el nombre no puede estar vacio`);
        }else if(precio<=0){
            console.log(`Error, el precio no puede ser menor a 1`);
        }else {
            this._servicios.push({nombreServicio, precio, descripcion});
            console.log(`Servicio guardado con exito`);
        }
    }

    eliminarServicio(nombreServicio:string){
        let index= this._servicios.findIndex(s=>s.nombreServicio=== nombreServicio);
        if(index===-1){
            console.log(`El servicio no se encuentra en la lista`);
        }else {
            this._servicios.splice(index, 1);
            console.log(`Servicio borrado`);
        }
    }

    listarServicios():void{
        console.log(`Servicios de ${this._nombre}`);
        this._servicios.forEach(s=>{
            console.log(`~${s.nombreServicio}:\n $${s.precio}\n ${s.descripcion}`);
        });
    }

    agregarCalificacion(calificacion:number):void{
        if(calificacion<=5 && calificacion>=1){
            this._claificaciones.push(calificacion);
            console.log(`Calificacion agregada`);
        }else{
            console.log(`Error el rango de calificacion es de 1 a 5`);
        }
    }

    promedioCalificacion():void{
        let prom=(this._claificaciones.reduce((acum, calificacion)=> acum+calificacion, 0))/this._claificaciones.length;
        console.log(`Promedio de calificaciones: ${prom}`);
    }
}

let miTaller=new Taller(`Taller de Luli`, `Sarmiento 12640`);
miTaller.agregarServicios(`Cambio de aceite`, 1500, `Se realiza la extraccion del aceite viejo y se pone nuevo`);
miTaller.agregarServicios(`Cambio de correa`, 4000, `Se realiza el cambio de la correa de distribucion `);
miTaller.listarServicios();
miTaller.eliminarServicio(`Pastillas de freno`);
miTaller.eliminarServicio(`Cambio de correa`);
miTaller.listarServicios();
miTaller.agregarCalificacion(2);
miTaller.agregarCalificacion(5);
miTaller.agregarCalificacion(1);
miTaller.agregarCalificacion(0);
miTaller.promedioCalificacion();
