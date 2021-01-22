//Metodos en arreglos

const personas = [
    {
        nombre:'Juan',
        edad:23,
        aprendiendo: 'JavaScript'
    },
    {
        nombre:'Pablo',
        edad:18,
        aprendiendo: 'PHP'
    },
    {
        nombre:'Alejandra',
        edad:21,
        aprendiendo: 'AdobeXD'
    },
    {
        nombre:'Caren',
        edad:30,
        aprendiendo: 'Phyton'
    },
    {
        nombre:'Miguel',
        edad:35,
        aprendiendo: 'ReactJS'
    }
];

//console.log(personas);

//mayores de 28 años
//uso de function filter
const mayores = personas.filter(persona => {
    //console.log(persona);
    return persona.edad>28;
});
//console.log(mayores);

const alejandra = personas.find(persona =>{
    return persona.nombre == 'Alejandra';
});
console.log('Alejandra esta aprendiendo: '+alejandra.aprendiendo);

//uso de function reduce
let total = personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
},0);

console.log(total / 5);