var mensaje = "mensaje local";
resultado += 2;

// datos es un objeto , es otra forma de escribirlo y no usar new
var datos={};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function saludar(){
	console.log(mensaje);
	console.log(resultado);
	
	console.log(datos.mensaje );
    console.log(datos.resultado);
}

saludar()