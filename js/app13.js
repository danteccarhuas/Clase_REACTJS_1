//Spread operator
let lenguages = ['JavaScript','PHP','Phyton'];
let frameworks = ['ReactJS','Laravel','Django']

//Unir los arreglos en 1 solo
//anterior forma de unir
//let combinacion = lenguages.concat(frameworks);
//nueva forma de unir - con spread
//let combinacion = [...lenguages,...frameworks];
//console.log(combinacion);

//let [ultimo] = lenguages.reverse();
//console.log(ultimo);

function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros);