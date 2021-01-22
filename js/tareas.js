//exportar una funcion
export const crearTarea = (tarea,urgencia)=>{
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = ()=>{
    console.log('La tarea se completó');
}

//Escribir classes
//PRIMERA FORMA DE EXPORTAR
//const nombreTarea = 'Pasear al perro'; 
//export default nombreTarea;

//SEGUNDA FORMA DE EXPORTAR
export const nombreTarea = 'Pasear al perro'; 

//const tarea = 'tarea';
//export default {
//    nombre: nombreTarea,
//    tarea: tarea
//}

// class Tarea{
//     constructor(nombre,prioridad){
//         this.nombre = nombre;
//         this.prioridad = prioridad;
//     }
//     mostrar(){
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }

// class ComprasPendientes extends Tarea{
//     constructor(nombre,prioridad,cantidad){
//         super(nombre,prioridad);
//         this.cantidad = cantidad;
//     }
//     mostrar(){
//         super.mostrar();
//         console.log(`y la cantidad de ${this.cantidad}`);
//     }
//     hola(){
//         return 'hola';
//     }
// }

//Crear los objetos
// let tarea1 = new Tarea('Aprender JavaScript','Alta');
// let tarea2 = new Tarea('Prepara Café','Alta');
// let tarea3 = new Tarea('Pasear al perro','Media');
// let tarea4 = new Tarea('Concer a mis suegros','Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

//Compras
//let compra1 = new ComprasPendientes('Jabon','Urgente',3);
// compra1.mostrar();
// console.log(compra1.hola());