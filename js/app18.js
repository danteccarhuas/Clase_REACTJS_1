//PRIMERA FORMA DE IMPORTAR
import {nombreTarea,crearTarea,tareaCompletada} from './tareas.js';
console.log(nombreTarea);

//SEGUNDA FORMA DE IMPORTAR
//import {nombreTarea} from './tareas.js';
//console.log(nombreTarea);
const tarea1 = crearTarea('Pasear al perro', 'Media');
console.log(tarea1);
tareaCompletada();