/*Consigna: Crea un programa para gestionar proyectos. El programa debe
permitirte:
1. Agregar un proyecto: Registrar un proyecto con su nombre y
estado (pendiente o en progreso).
2. Listar los proyectos: Mostrar todos los proyectos registrados.
3. Actualizar el estado de un proyecto: Cambiar el estado de un
proyecto a "finalizado" o "en progreso"*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./proyectos.json';

const leerProyectos=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirProyecto=(proyectos)=>{
    fs.writeFileSync(filePath, JSON.stringify(proyectos, null, 2));
};

const agregarProyecto=(nombre, desarrollo, estado)=>{
    const proyectos=leerProyectos();
    proyectos.push({ id: proyectos.length + 1, nombre, desarrollo, estado: estado});
    escribirProyecto(proyectos);
    console.log(`Proyecto agregada:"${nombre}"`);
};

const listaProyectos=()=>{
    const proyectos=leerProyectos(); 
    console.log('Lista de proyectos:');
    proyectos.forEach(p=>{
        console.log(`${p.id}. ${p.nombre} ---> Estado: ${p.estado}
            ${p.desarrollo} `);
    });
};

const eliminarProyectos = (idDeProyecto) => {
    let proyectos = leerProyectos();
    proyectos = proyectos.filter(p => p.id !== idDeProyecto);
    escribirProyecto(proyectos);
    console.log(`Proyecto eliminado`);
};

const cambiarEstado = (idDeProyecto, estado) => {
    const proyectos = leerProyectos();
    const proyecto = proyectos.find(p => p.id === idDeProyecto);

    if (proyecto) {
        proyecto.estado = estado;
        escribirProyecto(proyectos);
        console.log(`Proyecto actualizado`);
    } else {
        console.log('Proyecto no encontrado');
    }
};



let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar un nuevo proyecto
    2- Cambiar estado de un proyecto 
    3- Eliminar proyecto `));
switch(menu){
    case 1:
        let nombre=prompt(`Ingrese el nombre del proyecto: `);
        let descripcion=prompt(`Ingrese una breve descripcion del proyecto: `);
        let estado=prompt(`Ingresa el estado del proyecto: `);
        agregarProyecto(nombre, descripcion, estado);
        listaProyectos();
        break;
    case 2:
        let idDeTarea=Number(prompt(`Ingrese el número de proyecto a modificar: `))
        let nuevoEstado=prompt(`Ìngrese el nuevo estado del proyecto: `);
        cambiarEstado(idDeTarea, nuevoEstado);
        listaProyectos();
        break;
    case 3:
        let idProyecto=Number(prompt(`Ingrese el número de proyecto a eliminar  `));
        eliminarProyectos(idProyecto);
        listaProyectos();
        break;
    default:
        console.log(`Error: se debe ingresar una de las opciones `)
}