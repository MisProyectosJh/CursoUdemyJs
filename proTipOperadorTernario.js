//Determinar un numero mayor
const determinaMayor=(a, b)=> (a>b)? a:b;
console.log(determinaMayor(4, 19));
//Determinar si un usuario tiene una membresía
const tieneMembresia=(membresia)=> (membresia)? 'Cuesta 2 dolores':'Cuesta 5 dolares';
console.log(tieneMembresia(false));

//El operador ternario generalmente me sirve para evaluar dos condiciones

//Cuando requeramos evaluar más de dos...
//Sistema de notas
const nota = 85;
const rangoNotas = (nota >= 95)? 'A+':
                   (nota >= 90)? 'A' :
                   (nota >= 85)? 'B+':
                   (nota >= 80)? 'B' : 'F';

console.log({nota, rangoNotas});