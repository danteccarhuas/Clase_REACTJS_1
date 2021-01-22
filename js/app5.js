//arrow functions

let viajando = (destino, duracion) => `Viajando a la ciudad de: ${destino} por ${duracion}`


let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona', '9 dias');

console.log(viaje);