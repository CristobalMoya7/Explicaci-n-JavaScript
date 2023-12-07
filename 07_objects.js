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
    secondOwner: "Elon",
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

console.log(paginaDeProducto)