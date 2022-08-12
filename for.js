console.warn('FOR TRADICIONAL');
const superheroes = ['Superman', 'Batman', 'Aquaman', 'La Mujer Maravilla'];
for(let i=0; i< superheroes.length; i++){
    console.log(superheroes[i]);
}
console.warn('FOR IN');
for(let i in superheroes){ //Omite la condición, recorre el vector hasta terminar
    console.log(superheroes[i]);
}
console.warn('FOR OF');
for(let heroe of superheroes){
    console.log(heroe); //Extrae el valor que se encuentra dentro del arreglo y lo regresa a la variable a iterar
}