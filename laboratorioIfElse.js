//**************************************************** */
//Obtener el día actual de la semana sin usar if else //
//***************************************************** */
//USANDO OBJETOS
const hoy = new Date(); //Crea una instancia de la fecha actual
let dia = hoy.getDay(); //Obtiene el id del día actual, domingo:0, lunes:1, martes:2...sábado:6
const diasLetras = {
    0:"domingo",
    1:"lunes",
    2:"martes",
    3:"miércoles",
    4:"jueves",
    5:"viernes",
    6:"sábado"
}
dia=10;
console.log(diasLetras[dia] || "Día no definido");

//USANDO ARREGLOS
const diasLetras2 = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
let dia2= 4;
console.log(diasLetras2[dia2]);