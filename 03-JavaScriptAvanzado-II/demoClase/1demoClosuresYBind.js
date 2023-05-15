function contenedor () {
    var caja = []

    return function (item) {
        caja.push(item)
        return caja
    }
}
var caja = contenedor() 

console.log(caja("libro"));

//! Closure
//* Una función hija que retorna una función padre.
//* La función hija tiene que utilizar una variable de su padre.

//!----------------------------------------------------------------------

//* Bind

let persona = {
    nombre: 'Ignacio',
    apellido: 'Cenni'
}

function saludar () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

saludar() // Esta ejecución da undefined, porque la función aún no está ligada con el objeto persona. Hay que hacerle un Bind

let saludarPersona = saludar.bind(persona)
saludarPersona(); // se conoce como función currying

//! BIND ES UNA CLOSURE, PORQUE ES UNA FUNCIÓN QUE RETORNA UNA FUNCIÓN.