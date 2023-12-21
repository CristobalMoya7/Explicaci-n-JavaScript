
// Aqui veremos como controlar nuestro programa

//El problema del prompt es que siempre devuelve un string!!!!
let age = parseInt(prompt("¿Cual es tu edad?"), 10); //prompt sirve para preguntar al usuario. ParseInt sirve para convertir en int la variable. El 10 es para poner la forma en la que queremos que salgan los numeros

// creamos un if, que se crea con if () {}. Dentro de los parentesis va un bool, algo que de true o false

if (age >= 18) { // Esto se ejecuta si la condicion se cumple
    // Aqui dentro va todo lo del bloque.
    console.log("Eres mayor de edad");
} else if (age >=14){ // Else se ejecuta si la condicion del if no se cumple{
    console.log("Eres un adolescente");
} else {
    console.log(" No eres mayor ni adolescente");
}

console.log(age)

// console.log(msg) Esto daria error ya que msg esta definido dentro de la condicion if, dentro del ambito.

// Var es mejor no usarlo
var age1 = 30;

if (age1 >= 18) { 
    var age1 = 20;
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad")
}
console.log(age1);

// Ternario. En base a una condicion, le voy a asignar un valor a una variable. Resumir un if.

const message = age === 30 ? "Tienes mi edad" : "No tienes mi edad";

console.log(message);

// Lo de arriba es lo mismo que esto de abajo. Si edad es igual a 30 devuelve una cosa, si no devuelve otra

let message2 = "";
if (age === 30) {
    message2 = "Tienes mi edad";
} else {
    message2 = "No tienes mi edad";
}

// Otro ternario pero mas largo. Ternario es mejor usarlo solo para 2.

const message3 = age >= 18 ? "Eres mayor" : age >=14 ? "Eres adolescente" : "No eres mayor ni adolescente";

// Ejemplo de ternario

let age4 = 60;
let player = 'Jordan';
let num = 23;
let isSaleFame = true;
let team = null;

let msg= `Soy ${player} de ${age4} años ahora mi equipo es ${team === null ? "ninguno" : team}`; // Si el equipo es nulo pongo ninguno, si no pongo el equipo

console.log(typeof age4);
console.log(typeof player);
console.log(typeof num);
console.log(typeof isSaleFame);
console.log(typeof team);

console.log(msg);

console.log("----------------------------");

const day = prompt("Dia de la semana");

// switch es como muchos elif

switch (day) {
    case "Monday": // Se usa la palabra reservada case que son como casos
        console.log("Clase de JS a las 19:00");
        break; // Se pone break para que salga
    case "Tuesday":
        console.log("Clase de JS a las 20:00");
        break; // Se pone break para que salga
    case "Thursday":
        console.log("Clase de JS a las 21:00")
        break; // Se pone break para que salga
    default:
        console.log("No hay clase, a descansar") // Default es para el resto de casos, como si fuese un else
        break; // Se pone break para que salga
}

// Mismo ejercicio pero con if, para que veamos que no hay gran diferencia

if (day === "Monday") {
    console.log("Clase de JS a las 19:00");
} else if (day === "Tuesday") {
    console.log("Clase de JS a las 20:00")
} else if (day === "Thursday") {
    console.log("Clase de JS a las 21:00")
} else {
    console.log("No hay clase, a descansar")
}

// La diferencia del switch y del if es que en swich solo ponemos la condicion una vez.

//Con operadores logicos

if (day === "Monday" || day === "tuesday" || day === "Thursday") {
    console.log("Clase a las 19:99")
} else {
    console.log("A descansar")
}

// EJERCICIO!!!

/* Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

Ingresa la temperatura 🌡: 0
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): K

La temperatura en Kelvin es: 273.15K

Ingresa la temperatura 🌡: 283.15
Ingresa la escala a la que quieras cambiar tu temperatura (C o K): C

La temperatura en Celsius es: 273.15°C */

let temperatura = +prompt("Ingresa la temperatura") // Poner el + delante es lo mismo que poner parseInt para pasar a un entero
let escala = prompt("Ingresa la escala a la que quieres pasar la temperatura (C o K)") 

if (escala === "C") {
    console.log(temperatura - 273.15);
} else if (escala === "K") {
    console.log(temperatura + 273.15)
} else {
    console.log("Debes escribir una escala real")
}

// Oro ejemplo con ternario

const temp = parseInt(prompt('Introduce la temperatura'))
let scale = prompt('Introcuce la escala (c o k)')
const kelvin = 273.15

const result = scale === 'c' ? `${temp - kelvin} grados C` : `${temp + kelvin} grados K`
console.log(result)

// Con swicht

let temperature = parseFloat(prompt('Ingresa la temperatura: '));
let scale1 = prompt('Ingresa la escala a la que quieras cambiar tu temperatura (C o K):');

switch (scale1){
    case 'K':
        console.log(`La temperatura en Kelvin es: ${temperature + 273.15}K`);
        break
    case 'C':
        console.log(`La temperatura en Celsius es: ${temperature - 273.15}ºC`);
        break;
    default:
        console.log(`Error de escala`)
}