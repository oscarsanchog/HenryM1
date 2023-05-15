//! El Call se ejecuta inmediatamente. tiene las mismas propiedades que el Bind
let persona = {
    nombre: 'Ignacio',
    apellido: 'Cenni'
}

function saludar (saludo, a, b, c) {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
    console.log(a);
    console.log(b);
    console.log(c);
}

saludar.call(persona, 'Hola', 1, 2, 3) // Se tiene que ejecutar todo de una. No sirve guardándolo en 
// una variable y ejecutarlo, como en el bind.