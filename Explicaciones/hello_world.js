// Para hacer un comentario ponemos las dos //

/* 
Esto seria para poder dividir 
el comentario en varias lineas
*/

console.log("Inicio");

// Variables

var num1 = 5; // El ; no es necesario siempre pero es bueno ponerlo asi no se nos olvida, luego tendremos herramientas que las pondran automaticamente
var num2 = 6; // Esta forma de poner las variables ya no se suele usar (var)

num2 = 78

console.log(num1);
console.log(num2);

// Para poner variables se suele poner let y const

let age = 30;
const legalAge = 18;

// Let se usa para una variable que si suele cambiar, una vez definida la variable, para modificarla solo tenemos que poner age = Nueva edad
// Es mejor definir con let y const y no con var ya que var se puede usar antes de haber definido la variable y esto puede generar errores, let y const hasta que no se haya definido no se puede usar

age = 31;
console.log(age);

// Const son variables que no se suelen cambiar

//legalAge = 43 Esto nos daria un error

age = "Nombre"; // La variable tambien se puede cambiar, por ejemplo de ser un numero a ser un campo de texto. CUIDADO CON HACER ESTO!!!!
console.log(age);

// Una ultima forma de definir variables:

let name = "Cristobal", isInTheKitchen = true; // Hemos defifino una variable y le hemos puesto un booleano, esta en la cocina = True

isInTheKitchen = false; // Como las otras variables estas tambien se pueden cambiar

console.log(isInTheKitchen);


console.log("Fin");