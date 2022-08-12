//En Js todos los PRIMITIVOS son pasados por VALOR, es decir, se crea una copia local dentro de la función
let a = 5;
let b = a;
a = 20;
console.log({a, b});

//En Js todos los OBJETOS son pasados por REFERENCIA, es decir, los cambios realizados dentro de la función lo
//afectarán también afuera

let jhonatan  = {nombre: "jhonatan"};
let alejandro = {...jhonatan};//LA SOLUCIÓN: encerrar el objeto copia {...objeto
alejandro.nombre = "david"; //Se supone que sólo se debería afectar el nombre de alejandro pero también afecta 
// el de jhonatan

console.log({jhonatan, alejandro});

//Ahora con una función
const cambiaNombre = ( {...persona} )=>{//LA SOLUCIÓN: encerrar el objeto copia {...objeto
    persona.nombre = "Andres";
    return persona;
}
let carlos = { nombre : "javier"}; //Se supone que carlos debería tomar el nombre de javier pero toma el de Andres
let juan = cambiaNombre(carlos);

console.log({carlos, juan});

//Ahora con arreglos
const vengadores = ['Iron Man', 'Thor', 'Hulk'];
const masVengadores = [...vengadores];//LA SOLUCIÓN: encerrar el vector en [...vector]
masVengadores.push('Spiderman');

console.table({vengadores, masVengadores});

