//creando una function

//function Declaration
function saludar(nombre){
    console.log('Bienvenido '+ nombre);
}

saludar('Juan');

//function expression
//Se debe declarar antes de ejecutar la function
const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: '+nombreCliente);
}
cliente('Dante');