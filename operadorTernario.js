//Es como un if else resumido
/**
 * Imaginemos una tienda con un manejo de horario diferente entre los días de semana
 * y fines de semana. El cliente visita la página web de la tienda para ver los horarios día a día 
 * y saber si está disponible.
 * En días de semana se abre a las 11.
 * Los fines de semana se abre a las 9.
 */

/**FORMA TRADICIONAL */
/**
 * const dia = 0;
const horaActual = 8;

let horaApertura;
let mensaje;

if(dia===0 || dia===6){
    console.log("Fin de semana");
    horaApertura = 9;
}else{
    console.log("Día de semana");
    horaApertura = 11;
}

if(horaActual>= horaApertura){
    mensaje='Está abierto';
}else{
    //Cuando queramos concatenar usaremos Back Tick(``)
    mensaje= `Está cerrado. Hoy abrimos a las ${horaApertura}`;
}

console.log({ horaApertura, mensaje });

 */

/** FORMA CON OPERADOR TERNARIO */
const dia = 1; //Nos encontramos en el día domingo
const horaActual = 11; //a las 11 am

let horaApertura;
let mensaje;

horaApertura = ([0, 6].includes(dia))? 9:11;/**Evaluamos la condición dentro del parentesis y dependiendo de ello
toma valor mi variable (si se cumple la condición es verdadero y toma el valor de 9 en caso contrario 11) */

mensaje = (horaActual>=horaApertura)? 'Está abierto':`No está abierto. Vuelva a las ${horaApertura}`;

console.log(horaApertura, mensaje);
