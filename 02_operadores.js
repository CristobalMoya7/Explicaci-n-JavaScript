
// Asignación (Definir una variable)

let x = 10;
let y = 5;

// Aritmeticos ( +, -, *, /)

console.log(x + y);

const suma = x + y;

console.log(suma);

const diferencia = suma / 2;

console.log(diferencia);

const producto = x * y;

console.log(producto);

const modulo = 4 % 2;

console.log(`modulo ${modulo}`);

console.log("Hola " + "Mundo");

console.log("Modulo " + modulo);

console.log("12" + 4);

console.log("12" - 2); // WHAT???? ESTOS SON FALLOS DE JS

console.log("12D" - 1); //NaN 

x += 5;
console.log(x);

x++; // Esto es igual a x = x + 1
console.log(x);

y -= 2;
console.log(y);

y--; // y = y - 1
console.log(y);

const discount = 0.3;
const precio = 19.99;
const stock = null;
const item = "Zapatillas 'Air Jordan'"

templateProducto = `
Producto = ${item}
Precio = ${precio - (precio * discount)}
Stock = ${stock}
`;

console.log(templateProducto);

// Operadores de comparación
console.log("<----- Operadores de comparacion ----->");

console.log("Hola" == "Hola");

console.log("12" == 12); // Esto da true pero no deberia, ya que no son del mismo tipo
// Para que no de el fallo ponemos la mayoria de veces TRES IGUALES ===
console.log("12" === 12); // Este si daria false

console.log("Hola" !== "Hola"); // Operador para saber si es distinto

// Mayor que o menor que (<>)

let a = 5, b = 8;

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

console.log(NaN === NaN); // WHAT????? DA FALSE POR OTRO "FALLO" EN JS. Para comprar NaN usamos la variable (isNaN)

//Pagina que esta cargando, mientras esta por debajo de 100 mostramos la pagina de carga. Una vez que isLoading pase a ser falso pasa a la otra pagina.
const fileSize = 20;
const isLoading = fileSize < 100;

// Operadores logicos
console.log("<----- Operadores logicos ----->");

// AND

const namee = "Jordan";
const edad = "12";
const isPublic = true;
console.log(isLoading && isPublic); // && es como un y. Ambos tienen que ser true para que la condicion se cumpla. Esto es como un and
console.log(namee ===  "" && edad === 0);

// OR

console.log(isLoading || isPublic); // || es como un o. Si uno es true ambos pasan a ser true. Es omo un or
console.log(namee === "" || edad === 0);
// Tambien puede ser una variable const isValid = nombre === "" || edad === 0;

//NOT

const nombre = "Jordan";
const bestPlayer = nombre === "Jordan";

// copiar


