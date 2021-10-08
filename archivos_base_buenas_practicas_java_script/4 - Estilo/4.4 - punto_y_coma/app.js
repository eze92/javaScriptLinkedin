var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function(costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function() {
        var mensaje = "Hola ";
        return mensaje;
    }
};
//java script no exige el punto y coma pero es importante agregarlo para entender mejor el codigo

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
    console.log(tienda.saludar());
});