var cuenta = 2 + 3;

var cuentaNueva = 20 + 45;

var totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);
//creo una funcion para sumar y luego reutilizar
function suma(datoA, datoB){
	var resultado = datoA + datoB;
	return resultado;
}

suma(2,3);
// encapsulo todo la operacion para evitar la duplicidad 
var cuentaFinal = suma(suma(2, 3), suma(20, 45));

//suma(5, 65)
console.log(cuentaFinal)
