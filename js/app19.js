import Tarea from './tareas1.js';
import ComprasPendientes from './compras.js';

const tarea1 = new Tarea('Aprender JavaScript','Urgente');
console.log(tarea1);
tarea1.mostrar();

const compra1 = new ComprasPendientes('Pizza','Urgente',2)
console.log(compra1);
compra1.mostrar();
compra1.hola();