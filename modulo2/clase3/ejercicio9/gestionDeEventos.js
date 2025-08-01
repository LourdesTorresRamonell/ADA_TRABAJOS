/*Consigna: Crea un programa para registrar eventos. El programa debe
permitirte:
1. Agregar un evento: Registrar un evento con nombre, fecha y
lugar.
2. Listar los eventos: Mostrar todos los eventos registrados.
3. Eliminar un evento: Eliminar un evento de la lita*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./listaDeEventos.json';

const leerEventos=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirEventos=(eventos)=>{
    fs.writeFileSync(filePath, JSON.stringify(eventos, null, 2));
};

const agregarEvento=(nombre, fecha, lugar)=>{
    const eventos=leerEventos();
    eventos.push({ id: eventos.length + 1, nombre, fecha, lugar});
    escribirEventos(eventos);
    console.log(`Evento agregado:"${nombre}"`);
};

const listarEventos=()=>{
    const eventos=leerEventos(); 
    console.log('Lista de evetos:');
    eventos.forEach(evento=>{
        console.log(`${evento.id}. ${evento.nombre}
            Fecha ${evento.fecha}
            Lugar: ${evento.lugar}`);
    });
};

const eliminarEvento=(idDelEvento)=>{
    let eventos=leerEventos();
    eventos=eventos.filter(e=>e.id !== idDelEvento);
    escribirEventos(eventos);
    console.log(`Evento eliminado`);
};


let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar un nuevo evento
    2- Eliminar un evento `))
if(menu===1){    
    let nombre=prompt(`Ingrese el evento a agregar `);
    let fecha=prompt(`Ingrese la fecha del evento `);
    let lugar=prompt(`Ingrese el lugar donde se llevara a cabo `);
    agregarEvento(nombre, fecha, lugar);
    listarEventos();
}else if(menu===2){
    let idDelEvento=Number(prompt(`Ingrese el número del evento a eliminar `));
    eliminarEvento(idDelEvento);
    listarEventos();
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}