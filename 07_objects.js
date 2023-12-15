console.log("Objects");

/*
Esto asi seria cutre estar poniendo el nombre con numeros. Lo sustituimos y creamos un objeto:

// Producto 1
const precio = 190;
const name = "Air Jordan";
const stock = null;

//Producto 2
const name2 = "Zapatos";
const precio2 = 20;
const stock2 = 1000;
*/

//Creamos un objeto

//const producto = new Object(); Esta forma la vamos a usar menos
const productoEstrella = { // Esta es la forma mas usada
    name: "Air Jordan",
    precio: 123, // Si duplicamos las propiedades se pisara la ultima a la mas vieja.
    stock: null,
    //precio: 526 Si duplicamos las propiedades se pisara la ultima a la mas vieja.
    //name: Nike
};

console.log(productoEstrella);

const fordMustang = {
    brand: "Ford",
    year: 1969,
    model: "Mustang",
    firstOwner : "Cristobal",
    stock: null,
    country: {
        name: "USA",
        code: "us",
    },
    owners: ["Cristobal", "Juan", "Cynthia"],
    "second-owner": "Elon",
};

const cars = [ // Array que contiene objetos
    fordMustang
];

console.log(fordMustang)

const paginaDeProducto = `
Producto ${fordMustang.brand}
Año ${fordMustang.year}
Model: ${fordMustang.model}

Country: ${fordMustang.country.name}

Owners: ${fordMustang.owners.join(" | ")}
`

console.log(paginaDeProducto);

// Esto se usaria asi cuando tengamos venga en formato Kebab, que es el caso de secons-owner, el - es el Kebab
console.log(fordMustang["second-owner"]);
console.log(fordMustang["year"]); // Este tambien podria ser fordMustang.year

// Como hacer para que no tengamos que poner mil if y else if para acceder a la propiedad que el usuario quiera

const key = prompt("¿Que quieres saber del fordMustang?");
console.log(fordMustang[key]); // Asi de facil

// Como poner los valores dinamicos newKey

const keyId = "newKey2";

const car = {
    title : "Car 1",
    year: 1990,
    [keyId]: 12 // Al ponerlo entre [] hacemos que sea variable, es decir, si arriba en la variable cambia el valor cambiara automaticamente sin tener que cambiarlo nosotros.
};             // Aunque arriba en la variable pone newKey2 va a aparecer lo que le pongamos

console.log(car);

console.log(car[keyId]);

// Como actualizar la informacior

car.title = "Car 2"; 
car.year = 2004;

car.title = car.title.toUpperCase(); // Para ponerlo en Mayusculas no pondria el titulo en mayuscula, usariamos lo aprendido como en este caso

console.log(car);

// Como borrar alguna de las propiedades

// La primera opcion seria con la palabra reservada delete
delete car.year;

// La segunda serviria para borrar varios a la vez
const removeKeys = ["year", "title"];
for (let index = 0; index < removeKeys.length; index++) {
    const element = removeKeys[index];
    delete car[element];
}

console.log(car);

// Podemos tener arrays con objetos

const shows = [
    {
        id: 1,
        name: " Under the dome",
        geners: ["Drama", "Sciende.Fiction", "Thriller"]
    },
    {
        id: 2,
        name: "Game Of Thrones",
        geners: ["Drama", "Thriller"],
        season: {
            title: "Season 1"
        },
    }
];

console.log(shows);
console.log(shows[0].geners);

// Esto es un ejemplo de como crear por ejemplo un show para cada template


let showTemplate = "";
for (let index = 0; index < shows.length; index++) {
    const show = shows[index];
    showTemplate = showTemplate + `
    <h2>${show.name}</h2>
    <p>${show.geners.join(" ,")}</p>
    `;
}

// el document.write tambien sirve para mostrar informacion como console.log(), la diferencia es que en vez de aparecer en la consola aparece al lado como un HTML
document.write(showTemplate);

// Object.keys, Objets.values, Objets.entries for..in, JSON.

const stringValue = JSON.stringify(shows); // stringify convierte en String, eso hace que los undefined se pierdan
console.log(stringValue);
const newShowsArray = JSON.parse(stringValue); // Parse vuelve al valor originar pero ya se han perdido los undefined ya que antes habiamos usado un stringify
console.log(newShowsArray); 

// Como sabemos que stringify elimina los undefined podriamos eliminar informacion asi

 car.year = undefined;

 console.log(JSON.parse(JSON.stringify(car))); // Asi eliminariamos igual

 console.log(`Keys: ${Object.keys(shows[0])}`); // Esto nos muestra las keys
 console.log(`Values: ${Object.values(shows[0])}`); // Esto nos muestra los values
 console.log(`Entries: ${Object.entries(shows[0])}`); // Esto nos muestra clave valor de todo

 // For..in Vamos a recorer cada una de las keys, por ejemplo, para mostrar la parte de dentro del season

 for (let key in shows[1]) {
    console.log(key);
    const value = shows[1][key];
    console.log(value);
    // Si por ejemplo queremos editar algo dentro
    if (key === "name") {
        shows[1][key] = "***";
    }
 }

console.clear()

 // EJERCICIO

 /*
 Ejercicio: Filtrar y transformar un array de objetos

Enunciado: Dado un array de objetos que representan libros
Filtrar los libros cuyo año de publicación sea posterior a 2000 y luego  crear un nuevo array con los títulos de esos libros.

titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
titulo: 1984 | autor: George Orwell | año: 1949
titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
titulo: El código Da Vinci | autor: Dan Brown | año: 2003
titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008
*/

const libros = [
    {
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        año: "1925"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        año: "1949"
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: "1967"
    },
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        año: "1997"
    },
    {
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        año: "2003"
    },
    {
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer",
        año: "2005"
    },
    {
        titulo: "Los juegos del hambre",
        autor: "Suzanne Collins",
        año: "2008"
    }
];

 let arrayLibros2000 = [];

for (let i = 0; i < libros.length; i++) {
    const libro = libros[i];
    if (libro.año > 2000){
        arrayLibros2000.push(libro.titulo);
    }
}

console.log(`Libros posteriores al 2000: ${arrayLibros2000.join(', ')}`);

