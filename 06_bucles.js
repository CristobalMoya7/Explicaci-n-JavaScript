console.log("Bucles");

// Un bucle sirve para recorrer elemento a elemento de nuestra lista. Bucle FOR y WHILE
// En las llaves de for, while... no lleva ;. Todos los que van en moradito

// Creamos nuestra lista de frutas

const fruits = [ 
"apple",
"banana",
"kiwi",
"watermelon",
"orange",
];

// Dentro de las () tenemos que añadir 3 cosas separadas por ;. 1º una variable, normalmente se llama index. Esta variable normalmente se iguala a un valor,
// normalmente se pone 0 para que recorra toda la lista. 2º debemos poner algun operador (+, -, *). 3º Añadimos el incremento que queramos    
// Para aumentar el index ya sabemos que se puede poner index = index + 1, index += 1 o index++

for (let index = 0; index < 4; index++) { // Siempre que la condicion del centro sea verdadera, se va a ejecutar el codigo
    const fruit = fruits[index];
    console.log(fruit.toUpperCase()); // Aqui ya podriamos usar alguna funcion como UpperCase para no tener que ir poniendola elemento a elemento
}
/*
Esto seria lo mismo que lo de arriba pro muy repetido
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/

console.log(fruits.length); // Tenemoos 5 elementos (0, 1, 2, 3, 4)
//La ultima posicion seria length - 1 o con la funcion .at(-1)
console.log(`Last element ${fruits[fruits.length - 1]}`);

for (let index = 0; index < fruits.length ; index++) { // Puede ser que no sepamos la longitud de nuestra lista. Entonces lo hacemos con length
    const fruit = fruits[index];
    if (fruit.toLowerCase === "kiwi") {
        console.log("*******");
    } else {
        console.log(fruit);
    }
    console.log(fruit);
}

// Hecho con ternario. Eso aqui no se usa mucho

for (let index = 0; index < fruits.length ; index++) { // Puede ser que no sepamos la longitud de nuestra lista. Entonces lo hacemos con length
    const fruit = fruits[index];
    fruit.toLowerCase() === "kiwi" ? console.log("*****") : console.log(fruit);
}

// BREAK - CONTINUE
console.log("Break - Continue")

// BREAK

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(`Index ${i}`)
    if (fruit.toLowerCase() === "kiwi") {
        break; // Este break hace que cuando entre a esta condicion se pare, aunque sea verdad. Cuando llega a kiwi sale.
    } else {
        console.log(fruit);
    }
    
}

// CONTINUE

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(`Index ${i}`)
    if (fruit.toLowerCase() === "kiwi") {
        continue; // Este continue corta la vuelta que esta dando el for, es decir, no corta el for pero si para la vuelta y hace que empiece por arriba de nuevo.
    } else {
        console.log(fruit);
    }    
}

// Ejercicio: Hacer que se cree una lista nueva sin kiwi desde la otra lista

let fruitsNoKiwi= [];
for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    if (fruit.toLowerCase() !== "kiwi") {
        fruitsNoKiwi.push(fruit); // Añadimos todas las frutas menos kiwi a nuestra nueva lista
    }
}

console.log(fruitsNoKiwi)

if (!fruitsNoKiwi.includes("kiwi")) { // el ! es de negacion. Si kiwi no esta en la lista, mostramos el mensaje. Este ! es como un not y es muy importante.
    console.log("No kiwi");
}

// Ejercicio

/*
Enunciado: Dada una lista de números, crea dos nuevas listas, una que contenga solo los números impares de la lista original y la otra los pares. Cuidado que la lista puede no contener números.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false
*/

const total_list = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, "", false, NaN];
let listaPar = [];
let listaImpar= [];

for (let index = 0; index < total_list.length; index++) {
    const element = total_list[index];
    if (typeof element === "number") {
        if (element % 2 === 0) {
            listaPar.push(element)
        } else {
            listaImpar.push(element)
        }
    }
}

console.log(`Lista par: ${listaPar}`);
console.log(`Lista impar: ${listaImpar}`);

// ¿Como recorrer un array de array? 

const matrix = [
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9]  // 2
];

for (let index = 0; index < matrix.length; index++) {
    const rows = matrix[index];
    for (let columnIndex = 0; columnIndex < rows.length; columnIndex++) {
        const colums = rows[columnIndex];
        console.log(colums)
    }
}

/*
Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo

--*--
-***-
*****

Luego de definirlo recorrerlo para que se pinte como en el dibujo
*/

// Creado por mi

const listaBidimensional = [
    [' ', ' ', '*', ' ', ' '],
    [' ', '*', '*', '*', ' '],
    ['*', '*', '*', '*', '*']
];

for (let index = 0; index < listaBidimensional.length; index++) {
    const element = listaBidimensional[index].join("").replaceAll(" " , "-");
    console.log(element);
}

// WHILE!!!!
 // A diferencia del for que controlamos el incremento en la zona inicial. Aqui lo controlamos dentro
// A diferencia del for, en el while dentro de los parentesis se pone una condicion

let index = 0;
while (index < 400) { // A diferencia del for, en el while dentro de los parentesis se pone una condicion
    console.log("Dentro del while");
    if (index < 100) {
        index = index + 1;
    } else {
        index = index + 100;
    }
}

// --------------------------

const presents = []
while(true) {
    const newPresent = prompt("Añadir regalo: ");
    console.log(newPresent);
    if (!newPresent) { // Esto significa, si es nulo, que es lo que devuelve el boton cancelar, haz un break y sal del bucle
        break;
    }
    presents.push(newPresent);
    console.log(`Lista de regalos ${presents.join(", ")}`);
}

// EJERCICIO

// hecho por mi

/*
Piedra papel tijera

Vamos a preguntar al usuario su jugada, que tiene que ser "piedra", "papel" o "tijera"

- Si no es ninguna mostrar un mensaje de "opción incorrecta"
- Si el usuario quiere salir que escriba "salir"
- El rival siempre va a tener piedra
- Implementar la lógica
  - "Ganaste tu tienes papel y el rival piedra"
  - "Perdiste tu tienes tijeras y el rival piedra"
  - "Empate ambos tienen piedra"
  */


  while (true) {
    const jugada = prompt("Escoge entre piedra, papel, tijera o salir");
    if (jugada === "salir") {
        break;
    }
    else if (jugada === "piedra") {
        console.log("Empate, ambos tienen piedra");
    }
    else if (jugada === "papel") {
        console.log("Ganaste tu tienes papel y el rival piedra")
    }
    else if (jugada === "tijera") {
        console.log("Perdiste tu tienes tijeras y el rival piedra")
    }
    else {
        console.log("Opcion incorrecta")
    }
  }