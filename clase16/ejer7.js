/*Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos
quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo,
el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.*/
let nombres=['Ana', 'Luis', 'Andrea', 'María'];
let nombresA= nombres.filter(nombre=>nombre.startsWith(`A`));
console.log(nombresA);