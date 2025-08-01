/*Consigna: Crea un programa para gestionar tus tareas diarias. El
programa debe permitirte:
1. Agregar una tarea diaria: Registrar una nueva tarea con su
descripción y estado.
2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
3. Marcar una tarea como completada: Cambiar el estado de una
tarea de "pendiente" a "completada".*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./tareasDiarias.json';

const leerTareas=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirTarea=(tarea)=>{
    fs.writeFileSync(filePath, JSON.stringify(tarea, null, 2));
};

const agregarTarea=(desarrollo)=>{
    const tareas=leerTareas();
    tareas.push({ id: tareas.length + 1, desarrollo, estado: `Pendiente`});
    escribirTarea(tareas);
    console.log(`Tarea agregada:"${desarrollo}"`);
};

const listarTareas=()=>{
    const tareas=leerTareas(); 
    console.log('Lista de tareas por realizar:');
    tareas.forEach(tarea=>{
        console.log(`${tarea.id}. ${tarea.desarrollo} estado: ${tarea.estado}`);
    });
};

const eliminarTarea=(idDeTarea)=>{
    let tareas = leerTareas();
    tareas = tareas.filter(tarea => tarea.id !== idDeTarea);
    escribirTarea(tareas);
    console.log(`Tarea eliminada.`);
};

const completarTarea=(idDeTarea)=>{
    const tareas = leerTareas();
    const tarea = tareas.find(t => t.id === idDeTarea);
    if (tarea) {
        tarea.estado = 'Completada';
        escribirTarea(tareas);
        console.log(`Tarea completada: "${tarea.descripcion}"`);
    } else {
        console.log('Tarea no encontrada.');
    }
};

const reiniciarDia=()=>{
    const tareas = leerTareas();
    for (let i = 0; i < tareas.length; i++) {
        tareas[i].estado = 'Pendiente';
    }
    escribirTarea(tareas);
    console.log('Todas las tareas fueron reiniciadas.')
}

let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar nueva tarea diaria
    2- Cambiar estado de una tarea 
    3- Reiniciar día
    0- Eliminar tarea `));
switch(menu){
    case 1:
        let descripcion=prompt(`Ìngrese la tarea que desea agregar `);
        agregarTarea(descripcion);
        listarTareas();
        break;
    case 2:
        let idDeTarea=Number(prompt(`Ingrese el número de tarea que completo `));
        completarTarea(idDeTarea);
        listarTareas();
        break;
    case 3:
        reiniciarDia();
        listarTareas();
        break;
    case 0:
        let idTarea=Number(prompt(`Ingrese el número de tarea a eliminar  `));
        eliminarTarea(idTarea);
        listarTareas();
        break;
    default:
        console.log(`Error: se debe ingresar una de las opciones `)
}
