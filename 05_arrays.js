
// Las arrays para JS se consideran objetos. Son como listas.
// La posicion de cada elemento se llama indice y SIEMPRE empieza en 0

let fruit = []; // Esta es la manera mas comun de crearlo
let frui = new Array (); // Esta es otra forma de crearlo aunque no se usa mucho

//               0         1        2
let fruits = ["apple", "banana", "kiwi"];
console.log(fruits);
console.log(typeof fruits);

// Asi accedemos a cada uno de los elementos de la lista, EMPIEZA DESDE 0!!!!!!!!!

console.log(fruits[1]); 

// Asi cambiamos el valor del array

fruits = ["banana", "orange", "apple"]
console.log(fruits)

// Asi cambiamos el valor solo de un elemento del array

fruits[1] = "kiwi" 
console.log(fruits)

// Como em JS no hay orden como en python, nos encontraremos arrays escritas asi:

let frutas = ["apple", 
    "banana", 
    "kiwi", // La coma final no es necesaria
];

// Si ponemos una coma delante el orden cambiaria entero
//           0     1         2        3   
let frutes = [, "apple", "banana", "kiwi"];

// Se pueden mezclar varias cosas pero no es lo normal

let prueba = [false, "banana", 123, "145"];
console.log(prueba);

// Asi se añaden elementos (PUSH)

fruits.push("watermelon");
console.log(fruits);

// Eliminar elemento del final. Si lo ejecutamos mas veces va borrando todo el rato

fruits.pop();
console.log(fruits)

// Sacar el indice en caso de listas largas. Si no encuentra el elemento devolvera un -1

const index = fruits.indexOf("kiwi");
console.log(index);

// Para borrar un elemento en concreto. Debemos pasarle el indice en el que esta y opcionalmente la cantidad de elementos que queremos borrar a partir de ese indice

fruits.splice(index, 1); // Aqui le estamos diciendo que desde index, que antes lo hemos definido como kiwi, elimine un elemento. Si no ponemos nada desde el indice que queramos borrara hasta el final
console.log(fruits);

//fruits.splice(index, -1, 1); Asi tambien podemos borrar el de delante
//console.log(fruits);

// Juntar dos listas

const present = ["TV", "PS5"];

const shoppingBag = fruits.concat(present);
console.log(shoppingBag);

console.log(shoppingBag.reverse()); // Pone la otra array primero

console.log(shoppingBag.includes("TV")); // Esto nos devuelve un Bool si esta la plabra que tenemos puesta
console.log(shoppingBag.includes("PS4"));

// EJERCICIO MIO

/*
// Paso 1: Crea un array vacío llamado "numeros"

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding

// Paso 3: Imprime el contenido del array "numeros" en la consola

// Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números

// Paso 5: Agrega el número 10 al inicio del array "numeros"

// Paso 6: Imprime el contenido del array "numeros" en la consola

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding

// Paso 8: Elimina la palabra keepcoding a partir del índice anterior

// Paso 9: Imprime el contenido del array "numeros" en la consola

// Paso 10: Imprime la longitud del array "numeros" en la consola

*/

let numeros = [];

numeros.push("1", "2", "3", "KeepCoding", "4", "5");
console.log(numeros);

if (numeros.includes("KeepCoding")) {
    console.log("Este array no solo tiene numeros")
};

numeros.unshift("10");
console.log(numeros)

const index1 = numeros.indexOf("KeepCoding");
console.log(index1);

numeros.splice(index1, 1);
console.log(numeros)

console.log(numeros.length);

// ARRAYS DE ARRAYS

const matrix = [
    [1,2,3], // 0
    [4,5,6], // 1
    [7,8,9]  // 2
];

console.log(matrix[1]) // Esto devuelve 4,5,6

console.log(matrix[2][1]); // Aqui accedemos al array 2, en la posicion 1 que seria el numero 8

console.log(matrix[2].join("-")); // .join añade un separador a todos los elementos del arrays que seleccionamos. Podemos poner el elemento que queramos
