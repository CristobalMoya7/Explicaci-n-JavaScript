console.log("Funciones");

// Las funciones sirve para agrupar una serie de ordenes en un unico codigo para luego poder usarlas en otro sitio

// Asi no se haria ya que si luego queremos usarlo tendriamos que estar buscando por todo el codigo, en vez de esto usamos funciones
console.log("Hola Tobas");

console.log("Hola Juan");

console.log("Hola Cynthia");

sayHi(); // Como la funcion esta definida en el ambito global podemos usarla donde queramos, siempre que se cree de forma global

// La primera forma de escribirla seria: "Dentro de los parentesis van argumentos"
// Esto no se va a ejecutar asi como se ejecuta un console log que este fuera

function sayHi() {
    console.log("Hello");
    console.log("Estoy dentro de la funcion");
}

// Para ejecutar la funcion ponemos el nombre de la funcion con parentesis
sayHi(); 

console.log("Final");

// Un if no debe devolver en un return ni true ni false ya que el if va a devolver eso si o si
function esMayorDeEdad (age) {
    return age >= 18;
    /*
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
    */
}

esMayorDeEdad(19);

const users = [
    {
        name: "user 1",
        age: 30,
    },
    {
        name: "user 2",
        age: 12,
    },
    {
        name: "user 3",
        age: 10,
    },
    {
        name: "user 4",
        age: 50,
    }
];

function displayUser(name) {
    console.log(`${name} es mayor de edad, vamos a registrar en la web`)
}

for (let {age, name} of users) {
    const mayorDeEdad = esMayorDeEdad(age);
    console.log(mayorDeEdad, age, name);
    if (mayorDeEdad) {
        displayUser(name);
    }
}
function sum(value1 = 0, value2 = 0) { // Los valores por defecto siempre van al final
    return value1 + value2;
}

console.log(`La suma es ${sum(5, 10)}`);

// Otra forma de definir funciones es definiendola en una variable como var, let y const

const suma = function(value1 = 2, value2 = 2, value3 = 2){
    return value1 + value2 + value3
};

console.log(`La suma es ${suma(2, 2, 2)}`);

// Function se comporta un poco como var, normalmente para una funcion usamos const por que no las vamos a reasignar normalmente, si se va a reasignar se puede usar otro
// Al hacer la funcion dentro de una variable no vamos a poder usarla hasta el momento de definirla como pasa con una funcion que no este en una variable que si se puede usar aunque
// no este definida

const crearSaludo = function(nombre){
    console.log("¿Se ejecuta la funcion?");
    return `Hola ${nombre}`;
};

console.log(crearSaludo); // Si ponemos solamente la variable nos va a mostrar la funcion en la consola.

const saludoPersona = crearSaludo; // Las funciones las podemos poner en otras variables para usarla en cualquier parte del codigo. Esto se suele hacer 

console.log(saludoPersona("Persona 1"));

console.log("FINAL FUNCTION");

// ARROW FUNCTION => OTRO TIPO DE FUNCIONES. NO SE USA LA PALABRA FUNCTION, SE USA LA FLECHA.
console.log("ARROW FUNCTION")

const sumArrow = (value1 = 0, value2 = 0, value3 = 0) => {
    return value1 + value2 + value3;
};

console.log(sumArrow(0, 2));

// Tienen un return implicito, es decir, se podria escribir toda en una linea

const sumArrow1 = (value1 = 0, value2 = 0, value3 = 0) => vale1 + value2 + value3; // Al ponerla sin llaves {} estariamos haciendo un return

/*
ESTO SERIA IGUAL Y SERIA MEJOR PARA VERLO, LAS LLAVES SE SUSTITUYEN POR ()

const sumArrow1 = (value1 = 0, value2 = 0, value3 = 0) => (
    vale1 + value2 + value3;
); 
*/

const getAdmin = () => ( // Ejemplo
    {
        name: "Cristobal",
        role: "Admin",
    }
);

console.log(getAdmin());

// THIS FUNCTION VS ARROW

// Dentro de los objetos tambien podemos añadir funciones

const obj = {
    value: 20,
    noArrow: function () {
        console.log("No arrow function", this.value); // El this sirve para llamar el valor
        function insideFunction() {
            console.log("Inside function", this.value); // No lo encuentra el value ya que esta fuera
        }
        const insideFunction1 = () => {
            console.log("Inside function 1", this.value); // La arrow function si lo encuentra
        }
        insideFunction()
        insideFunction1.call(this) // El call hace que el this pase a la siguiente funcion, es decir, lo comparten
    }
};

console.log(obj.noArrow());

// REST PARAMS. ESTO ES PARA ACCEDER A TODOS LOS POSIBLES PARAMETROS QUE TENGA LA FUNCION, ESTO SE USA CON EL OPERADOR DE 3 PUNTOS ...

const sumArrow2 = (...params) => {
    console.log(params);
};

console.log(sumArrow2(1, 2, 3, 4, 5, 6, 7)) // Devuelve todos los parametros por el rest params ...

const sumArrow3 = (firstParam, ...params) => { // Con el firstparam vamos a quitar el primer parametro, el 1 no saldria
    console.log(params);
};

console.log(sumArrow3(1, 2, 3, 4, 5, 6, 7)) // Con el firstparam vamos a quitar el primer parametro, el 1 no saldria

// Ejemplo

const sumArrow4 = (...params) => { 
    console.log(params);
    let result = 0;
    for (let num of params) {
        result += num;
    }
    return result;
};

console.log(sumArrow4(1, 2, 3, 4, 5, 6, 7))

// Otro caso de rest params ...

const adminUser = {
    name: "Cristobal",
    role: "Admin",
    password: "Hola1234",
    courses: [],
    age: 23,
    active: true,
};

// Esta forma no es la mejor, lo mejor seria destructuring en user

/*
const getUserInfo = (name) => {
    // ??
    return{
        name: users.name,
        role: users.role,
        courses: users.courses,
        age: users.age
    };
};

const adminInfo = getUserInfo(adminUser);

console.log(`usuario name ${JSON.stringify(adminInfo)}`) // Lo muestro sin mostrar el password
*/

// FORMA CORRECTA

const getUserInfo = ({password, ...otrasProps}) => { // AQUI DESCARTAMOS QUE SE MUESTRE LA PASSWORD Y COGER TODOS LOS OTROS PARAMETROS
    // ??
    console.log(otrasProps);
    return{otrasProps};
};

const adminInfo = getUserInfo(adminUser);

console.log(`usuario name ${JSON.stringify(adminInfo)}`) // Lo muestro sin mostrar el password

// EJERCICIO, CREAR ESTE EJERCICIO CON FUNCIONES

/*
let temperatura = +prompt("Ingresa la temperatura"); // Poner el + delante es lo mismo que poner parseInt para pasar a un entero
let escala = prompt("Ingresa la escala a la que quieres pasar la temperatura (C o K)");

if (isNaN(temperatura)) {
    console.log("Debes ingresar un número para la temperatura".trim);
} else {
    // Verificar la escala
    if (escala.toUpperCase() === "C") {
        console.log(temperatura - 273.15);
    } else if (escala.toUpperCase() === "K") {
        console.log(temperatura + 273.15);
    } else {
        console.log("Debes escribir una escala válida (C o K)");
    }
}
*/

let temperatura = +prompt("Ingresa la temperatura"); // Poner el + delante es lo mismo que poner parseInt para pasar a un entero
let escala = prompt("Ingresa la escala a la que quieres pasar la temperatura (C o K)");

const temperature = (temperatura, escala) => {
    if (isNaN(temperatura)) {
        return ("Debes ingresar un número para la temperatura".trim);
    } else {
        // Verificar la escala
        if (escala.toUpperCase() === "C") {
            return (temperatura - 273.15);
        } else if (escala.toUpperCase() === "K") {
            return (temperatura + 273.15);
        } else {
            return ("Debes escribir una escala válida (C o K)");
        }
    }
};

console.log(temperature(temperatura,escala));

// OTRO EJERCICIO

/*
const total_list = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, "", false];
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

console.log(`Lista par: ${listaPar}`)
console.log(`Lista impar: ${listaImpar}`) 
*/

const categorizarNumeros = (lista) => {
    let listaPar = [];
    let listaImpar = [];

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (typeof element === "number") {
            if (element % 2 === 0) {
                listaPar.push(element);
            } else {
                listaImpar.push(element);
            }
        }
    }

    return { listaPar, listaImpar };
};

const total_list = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, "", false];
const { listaPar, listaImpar } = categorizarNumeros(total_list);

console.log(`Lista par: ${listaPar}`);
console.log(`Lista impar: ${listaImpar}`);


console.log("FINAL ARROW FUNCTION");

// CIERRES
console.log("CIERRES");

// Los cierres nos permite crear una funcion con variables dentro, a las cuales pondamos acceder y esta variables tenga un ambito seleccionado

const counter = () => {
    let count = 0;
    const increment = () => {
        count += 1;
    };

    const getCount = () => {
        return count;
    }
    return {increment, getCount};
};

// Aqui cada variable tiene su valor independiente

const counterBreak = counter();
counterBreak.increment();
counterBreak.increment();
counterBreak.increment();
console.log(counterBreak.getCount());
const counterNextClass = counter();
counterNextClass.increment();
counterNextClass.increment();
console.log(counterNextClass.getCount());

// EJERCICIO CALCULADORA

/*
const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5));    
console.log(miCalculadora.restar(2));   
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));
console.log(miCalculadora.total())// Debería imprimir 16
*/


const calculator = () => {
    let result = 0; // Cambiado de const a let

    const sumar = (num) => result += num;
    const restar = (num) => result -= num;
    const multiplicar = (num) => result *= num;
    const dividir = (num) => result /= num;
    const total = () => result;

    return { sumar, restar, multiplicar, dividir, total };
};

const miCalculadora = calculator();
console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));
console.log(`RESULTADO FINAL: ${miCalculadora.total()}`);

console.log("FINAL CIERRES");

//Pasar como parametro una funcion

console.log("PASAR FUNCION COMO PARAMETRO");

const foo = (param) => {
    param(); // Esto seria una funcion de otra parte
};


// ESTA FORMA SERIA VALIDA PERO ESTARIA MEJOR CON OTRA FUNCION, ABAJO EL EJEMPLO

const realizarOperacionV1 = (num1, num2, operacion) => {
    if (operacion === "suma") return num1 + num2;
    else if (operacion === "resta") return num1 - num2;
};

const result = realizarOperacionV1(1, 2, "suma");
console.log(result);

// FORMA CORRECTA

const realizarOperacion = (num1, num2, operacion) => {
    return operacion(num1, num2);
};

const summ = (num1, num2) => num1 + num2;
const dividir = (num1, num2) => num1 / num2;

realizarOperacion(5, 2, summ); // Aqui ponemos la funcion que queremos usar
realizarOperacion(5, 2, dividir);
realizarOperacion(5, 2, (num1, num2) => num1 / num2); // Esto seria otra forma valida, es una funcion anonima, mas abajo explicado
realizarOperacion(5, 2, function (param1, param2) { // Otra forma de hacerlo, pasando una funcion como parametro en otra funcion
    return param1 - param2;
});




console.log("FINAL PASAR FUNCION COMO PARAMETRO");