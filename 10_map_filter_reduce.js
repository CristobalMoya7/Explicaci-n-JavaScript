console.log("MAP, FILTER, REDUCE");

/*
Son una forma de trabajar con los arrays con for, for in...
Con map, filter y reduce no vamos a tener que hacer copias a los arrays ya que no cambia el valor del array, ya que si el array estaba igualado a otro podria modificarlo al menos que hiciesemos una copia
For, for in... Si cambiaban el valor
Siempre hay que evitar estados mutables!!!!
Lo mejor siempre es usar funciones puras:

FUNCIONES PURAS: Son aquellas que siempre producen el mismo resultado para los mismos argumentos y no tienen efectos secundarios observables.
No modifican variables fuera de su ambito y no alteran el estado global
*/

// EJEMPLO FUNCION PUTA

const sumar = (a, b) => a + b // Es pura ya que para los mismo argumentos genera el mismo resultado

console.log(sumar(1, 3)); // Siempre va a dar 4
console.log(sumar(1, 3)); 
console.log(sumar(1, 3)); 
console.log(sumar(1, 3)); 

// EJEMPLO FUNCION NO PURA (EJEMPLO FORZADO)

let num = 0;
const impureSumar = (num1, num2) => {
    num = num + num1 + num2
    return num
};

console.log(impureSumar(1, 3)); // Esto no va a dar siempre 4 ya que estamos modificando la variable de fuera que es num
console.log(impureSumar(1, 3));
console.log(impureSumar(1, 3));
console.log(impureSumar(1, 3));

const datos = [];

const addElement = (arr, newElement) => {
    arr.push(newElement);
    return arr;
};

console.log(addElement(datos, "Elemento 1")); // Esperamos recibir ["Elemento 1"]
// ¿Que pasa si ahora ejecutamos otro console log
console.log(addElement(datos, "Elemento 2")); // El array ya ha sido mutado y Elemento 1 ya esta dentro

// ¿Como solucionamos esto?
// Se soluciona haciendo una copia en este caso

const datos1 = [];

const addElement1 = (arr, newElement) => {
    const newArray = structuredClone(arr);
    newArray.push(newElement); // Añadimos lo nuevo a newArray y no a arr
    return newArray;
};

console.log(addElement1(datos1, "Elemento 1")); // Esperamos recibir ["Elemento 1"]
// ¿Que pasa si ahora ejecutamos otro console log
console.log(addElement1(datos1, "Elemento 2")); // Esperamos recibir ["Elemento 2"]

/*
Inmutabilidad: La inmutabilidad implica que los datos no deben ser modificados una vez que se crean.
En JavaScript, se alienta el uso de estructuras de datos inmutables, lo que significa que se crean
nuevas instancias en lugar de modificar las existentes.
Por ejemplo la parte de arriba que no modificamos el array de datos, creamos una copia con el nombre newArray
*/

// En ese caso el user original no lo modificamos, modificamos la copia creada

const user = {
    user: "Cristobal",
};

const user2 = structuredClone(user);

user2.role = "Admin";

console.log(user)

const numbers = [34, 23, 64, 43, 12, 6];

let double = [];

const doubleList = (list) => {
    const double = [];
    for (let element of list) {
        double.push(element * 2);
    }
    return double
};
console.log(double);

// double = doubleList(numbers);
const newArray = numbers.map(function (number) { // Este map lo que hace es recorrer el array, como el for de arriba. Map y filter siempre devuelven un nuevo array
    console.log(number);
});
console.log(newArray);

// SI NOS FIJAMOS ARRIBA, MAP SIEMPRE VA A DEVOLVER UN ARRAY PERO CON LAS MEDIDAS DEL ARRAY ORIGINAL Y CON LOS VALORES QUE YO LE RETORNE,
// POR ESO ARRIBA PONE UNDEFINED 6 VECES

const newArray1 = numbers.map(function (number) { 
    return number * 2;
});
console.log(`Array original no debe cambiar ${numbers}`);
console.log(`Esta array si deberia estar modificada ${newArray1}`);

// Para resumir la funcion bien

const newArray2 = numbers.map(number => number * 2); // Esto es lo mismo que arriba pero resumido
console.log(`Array original no debe cambiar ${numbers}`);
console.log(`Esta array si deberia estar modificada ${newArray2}`);

// FILTER. SIEMPRE VA A RETORNAR UN BOOLEANO

// Si por ejemplo de la lista original quiero que desaparezca un numero (numero 64)
// Si pongo que retorne true considerara que todo tiene que estar en la lista, si retorno false eliminara todo

const newList = numbers.filter(number => number !== 64); // Si es diferente a 64 devolvera true, cuando encuentre el 64 dara false y borrara

console.log(`Esta array debe estar sin 64 ${newList}`);
console.log(`Array original no debe cambiar ${numbers}`);

const nums = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, "", false];

const classifyNumbers = (items) => {
  const isEven = (item) => typeof item === 'number' && item % 2 === 0;

  const evenNumbers = items.filter(isEven);
  const oddNumbers = items.filter(item => {
    return !isEven(item);
  });

  return { evenNumbers, oddNumbers };
};

console.log(classifyNumbers(nums));

// ------

const multiplicador = (primerValor) => {
    return (item) => {
        return item * primerValor;
    };
};

const multiplicadorX2 = multiplicador(2);
const multiplicadorX3 = multiplicador(3);

console.log(numbers.map(multiplicadorX2));
console.log(numbers.map(multiplicadorX3));

// EVERY. ESTE ITERA IGUAL QUE LOS OTROS POR CADA ELEMENTO Y LO QUE DEVUELVE ES UN BOOL SI TODOS CUMPLEN UNA CONDICION
numbers.every(() => {
});

// SOME. DEVUELVE TRUE O FALSE SI SE CUMPLE UNA CONDICION
numbers.some(() => {
});

// SORT. ESTE ES PARA ORDENAR. RECIBE LOS PARAMETRO DE UNA FUNCION Y VA CAMBIANDO ENTRE ELLOS. PRIMERO RECIBE EL 1º Y 2º, LUEGO RECIBE 2º, 3º...
// EL SORT SI MUTA EL VALOR ORGININAL. EL RETURN SOLAMENTE DEVUELVE -1, 0 O 1. ESTO ES LO QUE HACE QUE CAMBIE EL ORDEN DEL ARRAY
numbers.sort(() => {
    return 1
});

// TOSORTED. IGUAL QUE EL SORT PERO SIN MUTAR
numbers.toSorted(() => {
    return 1
});

// FIND. LE PASA COMO A FILTER Y MAP. RECIBE UNA FUNCION E ITERA POR CADA ELEMENTO. ENCUENTRA EL PRIMER ELEMENTO EN ESTA ITERACION QUE DEVUELVA TRUE
// HACE ALGO COMO FILTER PERO NO DEVUEVE UN ARRAY, FILTER DEVOLVERIA [64];
// SU HAY VARIOS CON EL MISMO NOMBRE COGERIA EL QUE PRIMERO ENCUENTRE, SI QUEREMOS COGER MAS DE UNO DEBEMOS USAR FILTER
const element = numbers.find((item) => {
    return item === 64;
});

console.log(element);
// Esto se podria usar en este caso. Imagina que queremos encontrar un usuario con el nombre user 1.

// FOREACH. RECORRE EL ARRAY COMO SI FUESE UN FOR OF O ALGO SIMILAR. ES UNA FORMA MAS DE RECORRER UN ARRAY
const result = numbers.forEach((item) => {
    console.log(item);
});

// UNA FORMA DE USAR TODO ESTO:
const resultado = numbers.filter(item => item > 20).map(item => item * 2); // Aqui tendriamos los mayores de 20 multiplicados X2
console.log(resultado);