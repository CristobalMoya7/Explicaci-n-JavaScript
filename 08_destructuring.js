console.log("Destructuring + spread operator");

// DESTRUCTURING

// El destructuring sirve para acceder a algo de un objeto sin poner por ejemplo firstShow.year
// En vez de ponerlo asi
const firstShow = {
    titulo: "El gran Gatsby", 
    autor: "F. Scott Fitzgerald",
    año: "1925"
};

// Lo ponemos asi: Pondriamos solamente las propiedades que queremos
const {autor,año} = {
    titulo: "El gran Gatsby", 
    autor: "F. Scott Fitzgerald",
    año: "1925"
};

console.log(autor, año);

const books = [
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

console.log(books[0].year); 

// Para hacer el destructuring en un array

const [libro1, libro2] = books;
console.log(libro1, libro2);

// Tambien podriamos acceder dentro de uno

const [pos1, {titulo}] = books;
console.log(pos1, titulo); // Esto me daria el titulo de la posicion 1

// Lo mejor es poner alias para no liar todas las variables

const [pos2, {title, año: secondBookYear}] = books;

console.log(pos2, secondBookYear);

// SPREAD OPERATOR

const user = {
    role: "ADMIN",
    username: "Cristobal",
    courses: ["nodejs", "html"],
    country: {
        code: "es",
        name: "Spain",
    },
};

console.log(user);
const studentUser = structuredClone(user);

// Cambiamos los datos
studentUser.role = "STUDENT";
studentUser.username = "Moya";
studentUser.country.code = "us";
studentUser.country.name = "USA"
console.log(studentUser);
console.log(user);

// La forma de arriba no va a ser la que normalmente usemos en un SPREAD OPERATOR
// La mejor forma es esta de abajo, con ...nombre

const studentUser1 = {
    ...user,
    role: "STUDENT",
    username: "Kevin",
    experience: 2,
    country: {
        ...user.country,
        city: "Murcia"
    }
}

// Los tres ... no solo valen para copiar cosas, tambien me valen para concatenar informacion

const product = {
    name: "Air Jordan",
    price: 190,
};

const stockInfo = {
    stock:null,
};

const finalProduct = {...product, ...stockInfo};
console.log(finalProduct);

// Aqui se iria al Else ya que he modificado los datos
if (user.role === "ADMIN" && user.name === "Cristobal") {
    console.log("Empecemoos el curso");
} else [
    console.log("No hay curso")
]

// Esto que hemos creado arriba reescribe el array que teniamos hecho y esto a veces no lo queremos, hay que tener mucho cuidado
// Para que no se sobreescriba usamos structuredClone delante del nombre del objeto como lo tenemos puesto arriba

/*
console.log(user);
const studentUser = structuredClone(user);
*/

// Otra forma seria con JSON.PARSE(JSON.stringify()) Con esta forma hay que tener mucho cuidado ya que se puede cargar varias cosas como las funciones, los undefined...

// const studentUser = JSON.parse(JSON.stringify(user));

// La ultima forma es crear un objeto nuevo y copar el anterio con la anotacion ...nombre objeto. Esto lo que hace es copiar el objeto de antes,
// El problema es que esto solo hace una copia de lo nombres de fuera, por ejemplo el country {name: "es"}, de ese name no hace copia, el structuredClone si

// const studentUser = {...user};

// Otra forma seria usar librerias.

// Para usarlo en un array

const booksNoHunguerGames = books;
booksNoHunguerGames.pop(); // Aqui quitariamos el ultimo objeto de un array, con .pop
console.log(booksNoHunguerGames); // El problema es que esto hace que se pierda en el array para siempre
console.log(books);

// Para hacerlo bien pondriamos el structuredClone para asi no perder el array original

const booksNoHunguerGames1 = structuredClone(books);

// ------------------ Para concatenar

const fruis = ["apple", "banana"];
const presents = ["TV", "PS5"];

// .split sirve para convertir una variable const hola = "Hola que tal", la convierte en un array "hola", "que", "tal"