// Codigo asincrono. Es un codigo que se va a ejecutar en un momento X, es decir, no sabemos cuando va a termianr su ejecucion ni cuando va a empezar.
// Por ejemplo, cuando leemos un libro, el archivo de texto puede ser muy largo o muy corto.
// Cuando pedimos info a una web.
// Es decir, es info que no va seguida.

// Codigo asincrono:

const cargarDatos = () => {
    setTimeout(() => { // SetTimeout es para poner el tiempo en el que nos tiene que dar la respuesta, en este caso 1000, 1 segundo
        console.log("Datos cargados");
        return ["Dato 1", "Dato 2"];
    }, 5000); 
};

const datos = cargarDatos();

console.log(datos);

// Esto es un codigo asincrono, el problema es que esto ahora mismo no puedo controlarlo y si por ejemplo pongo .join(",") me daria error ya que el return aun no se ha ejecutado

// Hay 3 formas de controlar esta infirmacion:
// 1 callbacks. Esta va a ser la que menos veamos para controlar un codigo asincrono
// promesas
// async/await

// CALLBACKS. EL PROBLEMA ES GESTIONAR LOS ERRORES

const cargarDatosCB = (cb) => { // Pasamos una funcion para controlar el codigo asincrono
    setTimeout(() => { // SetTimeout es para poner el tiempo en el que nos tiene que dar la respuesta, en este caso 1000, 1 segundo
        console.log("Datos cargados");
        cb(null, ["Dato 1", "Dato 2"]); // cargamos los datos en una funcion. Esta funcion se va a ejecutar cuando termine el setTimeout asi no dara error
    }, 5000); // El null se usa para el error
};

// El problema de callbacks es la gestion de errores, ya que tenemos que estar gestionandolos en todo.
/*
cargarDatosCB((error, datos) => {
    console.log(datos.join(', '));
    if (error) {
      // throw new Error('Error datos');
    }
    cargarDatosDetalle((error, datosDetalle) => {
      console.log(datosDetalle);
      if (error) {
  
      }
      cargarDatosDetalle((error, datosDetalle) => {
        if (error) {
  
        }
        console.log(datosDetalle);
        console.log('Fin');
      });
    });
});
*/
// A esto se le llama callback hell

// PARA SOLUCIONAR ESTE ERROR SE CREARON LAS Q BLUEBIRD -> PROMESASÇ

// PROMESAS

const downloadUserData = () => {
    return new Promise((resolve) => { // Para crear una promesa hay que crear una funcion que retorne una promesa. return new promise
      setTimeout(() => { // El codigo va dentro de el return promise ya que se crea una funcion
        console.log('downloadUserData');
        resolve('user 1'); // El resolve es un parametro, le podemos dar el nombre que queramos, y se pone al final que es lo que "resuelve el problema"
      }, 1000);
    });
  };
const proccessUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('proccessUserData');
        resolve('user error in proccessUserData');
        }, 2000);
    });
};
const displayUserDashboard = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log('proccessUserData');
        resolve();
        }, 2000);
    });
};

const double = item => item * 2

downloadUserData()
  .then((datos) => { // el .them se ejecuta cuando aparece el ultimo resolve
    console.log('Finish download user data ', datos);
    return proccessUserData();
  })
  .then(displayUserDashboard) // Si no necesitamos console.log lo podemos poner asi para ahorrar poner mas lineas
  .then(() => {
    console.log('End');
  }).catch((error) => {
    console.log(error);
});

/// ASYNC / AWAY
// Cambia la anotacion pero ya no tenemos que cambiar nuestras funciones originales.

// async function main () {} Con la anotacion function seria asi

const main = async () => {
    try {
      const datos = await downloadUserData();
      console.log('Finish download user data async/await ', datos);
      await proccessUserData();
      await displayUserDashboard();
    } catch (error) {
      console.log(error);
    }
  };
  
main();