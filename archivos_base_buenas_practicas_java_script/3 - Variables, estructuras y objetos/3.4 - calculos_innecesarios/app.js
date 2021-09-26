var animales = ["perro", "gato", "pez"];

var totalAnimales = animales.length;

/*el ejemplo original tenia el el ciclo for que i < animales.length
al hacer esto ocasiona que se vuelva ejecutar otra vez la iteracion
para saber el largo , por lo cual es mucho mas eficiente agregar el largo
en una variable y asi se va ejecutar una sola vez en vez de cada iteracion
del for */

for (var i = 0; i < totalAnimales; i++) {
	console.log(animales[i]); // si yo no le agrego la posicion del arreglo pop pantala me mostrara el arreglo completo
};
