//Objetos

//Object literal
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
//console.log(persona);
//console.log(persona.mostrarInformacionTarea( ));

//const mostrarCliente = mostrarInformacionTarea(persona.nombre,persona.profesion);
//console.log(mostrarCliente);

//Object Constructor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia
}

//Agregar un prototype a tarea

Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene un prioridad de ${this.urgencia}`;
}

//Crear una nueva tarea
const tarea1 =  new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 =  new Tarea('Pasear al perro', 'Media');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());

//const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);

//console.log(mostrarInfo);