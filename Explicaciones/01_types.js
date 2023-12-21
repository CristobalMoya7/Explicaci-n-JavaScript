
// TIPOS PRIMITIVOS

let precio = 19.99; // Numero flotante
let precio1 = 19.99; // Numero entero

let producto = "Zapatillas 'Air Jordan'"; // Asi se pueden poner comillas dentro de comillas
producto = "Zapatillas \"Air Jordan\""; // Asi tambien se podrian poner

let stock = Infinity; // Infinity es de tipo numero ya que es INFINITO

console.log(typeof producto); //Typeof sirve para ver de que tipo es cada variable ( entero, bool, flotante, texto...)

stock = 0; // Aqui decimos que no queda stock en la tienda

console.log(typeof stock);

stock = null; // Aqui podriamos decir que ya no se van a volver a añadir zapatillas a la tienda

console.log(typeof stock);

stock = undefined; // Aqui podemos decir que esto nunca ha existido

console.log(typeof stock)

let variableQueNoExiste; // Si dejamos una variable vacia seria undefined ya que no le hemos definido nada a la variable

/*
Es importante intentar usar solamente una forma de definir variables:

cammelCase, la primera en minuscula y el resto en mayuscula (ESTA ES LA MAS USADA)
snake_case, separadas con _
PaskalCase, con todos los principios en mayuscula
kebab-case, se separan las palabras con -, pero esto puede llegar a dar error ya que en las variables intentaria restar. Esta forma no es muy usada.
*/

// template string!!!! IMPORTANTE
// Tambien podemos definir variables con `` torcidas, als de al aldo de la p. Esta forma de definir variables nos permite dar saltos de linea y nos la imprimira asi.
// Esto antes se hacia con el + para juntar palabras, \n para dar saltos de linea, con esto no hace falta

const saludo = `
Hola a todos!!!

    - 1 minuto!!
`; 

console.log(saludo);

// En el caso de abajo ponemos nosotros los datos sin usar una variable

const templateProducto = `
Producto = Zapatillas "Air Jordan"
Precio = 19.99
Stock = 12
`;

console.log(templateProducto);

// En el caso de abajo usamos variable para los datos

const templateProducto1 = `
Producto = ${producto}
Precio = ${precio}
Stock = ${stock}
`;

console.log(templateProducto1);

/*
Ejercicio: Crea y muestra el tipo de estas variables:

Edad: 60;
Jugador: Jordan;
Dorsal: 23;
Pertenece al salon de la fama: Sí
Equipo actual: ninguno

Y muestra un mensaje como este

"Soy Jordan de 35 años ahora mi equipo es: ninguno"
*/

let edad = 60;
let jugador = "Jordan";
let dorsal = 23;
let perteneceAlSalonDeLaFama = true;
let equipoActual = "Ninguno";

console.log(`El tipo de edad es: ${typeof edad}`);
console.log(`El tipo de nombre es: ${typeof nombre}`);
console.log(`El tipo de dorsal es: ${typeof dorsal}`);
console.log(`El tipo de salon_de_la_fama es: ${typeof salon_de_la_fama}`);
console.log(`El tipo de equipoActual es: ${typeof equipoActual}`);

let mensaje = `Soy ${jugador} de ${edad} años ahora mi equipo es: ${equipoActual}`;

console.log(mensaje);

// Bigint (Este tipo solo se usa cuando un numero es muy grande)
 
let numeroGrande = 1234567890123456789012345678901234567890n;

console.log(typeof numeroGrande);