
const username = "KeepCodingUser";
const password = "123";

if (password.length < 3) { // Poniendo . detras del string tenemos varias funciones (metodos), por ejemplo esta de length, que es para medir los caracteres
    console.log("Password muy corta")
}

console.log(username.length); // Poniendo . detras del string tenemos varias funciones (metodos), por ejemplo esta de length, que es para medir los caracteres

console.log(username.toUpperCase()); // Poner todo en MAYUSCULA
console.log(username.toLowerCase()); // Poner todo en minuscula
console.log(password.trim()); // Trim sirve para quitar los espacios que hay por delante y por detras, por ejemplo en el if de arriba si alguien pone una contraseña con espacios la detectaria con mas de 3 caracteres, con esto no
console.log(password.trim().toLowerCase()); // Podemos poner varios a la vez

const email = "Cristobal@gmail.com      "; // Aqui el usuario ha puesto la primera mayuscula sin querer y espacios
console.log(email.toLowerCase().trim());
console.log(email.includes("@gmail.com")) // Nos permite ver si tenemos algo, esto nos devovlera un bool. Por ejemplo aqui buscamos en el string un @gmail.com. Esto ya pasa a ser un BOOL
console.log(email.replace("Cristobal", "***")) // esto cambiaria la palabra Cristobal por ***, en el ejemplo de arriba lo hace
// cosole.log(email.replaceAll("Cristobal", "***")) Este si reemplaza todo
console.log(email.endsWith("@gmail.com"))



const number = 2;

/*
VAMOS A MEJORAR ESTE EJERCICIO.

Ejercicio: Conversor de temperaturas

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

La temperatura en Celsius es: 10°C
*/

// MI EJERCICIO

let temperatura = +prompt("Ingresa la temperatura"); // Poner el + delante es lo mismo que poner parseInt para pasar a un entero
let escala = prompt("Ingresa la escala a la que quieres pasar la temperatura (C o K)");

// Verificar si la temperatura es un número
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

// COPIADOS PARA EJEMPLOS

// 1º 
let temp = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K)").trim();
let esc = ""

if (typeof temp === "number" && !Number.isNaN(temp)) {
    if (escala.toUpperCase() === "C") {
        temp = temp - 273.15;
        esc = "Celsius"
    } else {
        temp = temp + 273.15;
        esc = "Kelvin"
    }
    console.log(`La temperatura en ${esc} es: ${temp}º${escala.toUpperCase()}`)
} else{
    console.log("La temperatura ha de ser un número.")
}

//2º
let temperature = parseFloat(prompt('Ingresa la temperatura: ').trim());
let scale = prompt('Ingresa la escala a la que quieras cambiar tu temperatura (C o K):');

if (!isNaN(temperature)){
    
    switch (scale.trim().toUpperCase()){
        case 'K':
            console.log(`La temperatura en Kelvin es: ${temperature + 273.15}K`);
            // document.write(`La temperatura en Kelvin es: ${temperature + 273.15}K`);
            break;
        case 'C':
            console.log(`La temperatura en Celsius es: ${temperature - 273.15}ºC`);
            break;
        default:
        console.log('Error de escala')
    }
                
} else {
    console.log('No se ha introducido un valor válido al ingresar la temperatura');
}
