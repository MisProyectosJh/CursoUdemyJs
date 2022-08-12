//******************* Funciones *******************
//Forma tradicional (No se recomienda) 
function saludar(nombre){
    console.log("Hola "+nombre);
}
saludar("Jhonatan");

//Función anónima
//Al asignar la función a una constante le decimos que no se puede volver a utilizar el nombre
const saludar2 = function(){
    console.log("Hola Mundo 2");
}
saludar2();

//Funciones de flecha
const saludar3 = (nombre) =>{
    console.log("Hola "+nombre);
}
saludar3("Montilla");

//Ejemplo suma (Cuando la función requiera de solo una línea de retorno la podemos dejar así:)
const sumar = (a, b) => a+b;
console.log(sumar(3, 6));
//Ejemplo número aleatorio
const aleatorio = () => Math.random();
console.log(aleatorio());

//Creando una persona en una función
//Al poner el retorno entre parentesís le indicamos que todo lo que le estamos retornando en un objeto
const crearPersona = (nombre, apellido, edad) => ({nombre, apellido, edad})
console.log(crearPersona("Jhonatan ","Montilla ", 27));



