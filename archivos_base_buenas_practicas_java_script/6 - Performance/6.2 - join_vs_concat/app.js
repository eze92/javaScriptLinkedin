var animales = ["perro", "gato", "pez"];
/*
utilizar join es mas util que utilizar concat
este otro me devuelve un objeto de arreglo y no la concatenacion
en si
*/
var listaAnimales = animales.join(", ");

var nuevaLista = animales.concat(",");

console.log(listaAnimales);
console.log(typeof listaAnimales);

console.log(nuevaLista);
console.log(typeof nuevaLista);