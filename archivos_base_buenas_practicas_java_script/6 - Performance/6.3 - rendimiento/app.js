console.time('revisión')

var animales = ["perro", "gato", "pez"];
var l = animales.length;

for (var i = 0; i < 10000; i++) {
    animales[i] = i;
}
//uso para ver cuanto tiempo toma la consulta debo  agregarlo el inicio y al final 
// en todo el codigo o en una porcion 
console.timeEnd('revisión')