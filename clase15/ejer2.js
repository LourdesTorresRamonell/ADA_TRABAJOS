/*Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El
último invitado no puede asistir. Elimina al último invitado y muestra quién
fue eliminado y el estado actualizado de la lista.*/
let listaDeInvitados=["Ana", " Juan", " Carlos", " Sofia"];
let desinvitado=listaDeInvitados.pop();
console.log(`Los invitados son ${listaDeInvitados}
    Y quien no va a asistir es ${desinvitado}`);