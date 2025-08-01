/*Consigna: Crea un programa que permita registrar contactos con
nombre, teléfono y correo electrónico. El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista*/

const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./listaDeContactos.json';

const leerContactos=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirContactos=(contacto)=>{
    fs.writeFileSync(filePath, JSON.stringify(contacto, null, 2));
};

const agregarContacto=(nombre, telefono, correo)=>{
    const contactos=leerContactos();
    contactos.push({ id: contactos.length + 1, nombre, telefono, correo});
    escribirContactos(contactos);
    console.log(`Contacto agregado:"${nombre}"`);
};

const listarContactos=()=>{
    const contactos=leerContactos(); 
    console.log('Lista de contactos:');
    contactos.forEach(contacto=>{
        console.log(`${contacto.id}. ${contacto.nombre}
            telefono: ${contacto.telefono}
            correo: ${contacto.correo}`);
    });
};

const eliminarContacto=(idDeContacto)=>{
    let contactos=leerContactos();
    contactos=contactos.filter(c=>c.id !== idDeContacto);
    escribirContactos(contactos);
    console.log(`Contacto eliminado`);
};


let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar un nuevo contacto
    2- Eliminar un contacto `))
if(menu===1){    
    let nombre=prompt(`Ingrese el nombre del contacto a agregar `)
    let numero=prompt(`Ingrese el numero telefonico `)
    let correo=prompt(`Ingrese el correo electronico `)
    agregarContacto(nombre, numero, correo);
    listarContactos();
}else if(menu===2){
    let idDeContacto=Number(prompt(`Ingrese el número del contacto a eliminar `));
    eliminarContacto(idDeContacto);
    listarContactos();
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}