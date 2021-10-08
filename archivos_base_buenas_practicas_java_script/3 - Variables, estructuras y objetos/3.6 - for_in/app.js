var persona = {
	nombre: "Sergio",
	email: "sergiobritor@gmail.com",
	twitter: "yacafx",
	saludar: function(){
		return "Hola mundo"
	}
}

var dato = "";
/*utilizo el for in para iterar sobre las propiedades del objeto persona 
ya sea para ver si existe o para ver los valores almacenados
si utilizo consolo.log(dato,persona[dato]) accedo a lo que tiene almacenado
*/
for (dato in persona){
	console.log(dato, persona[dato]);
}