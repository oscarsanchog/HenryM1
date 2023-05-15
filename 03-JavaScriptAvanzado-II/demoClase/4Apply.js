//* Funciona igual a Apply, pero los parámetros se pasan adentro de un arreglo.
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

saludar.apply(persona, ['Hola', 1, 2, 3]) // también se ejecuta de una sola. Es una diferencia de sintaxis con el Call

//! Otra forma de ejecturalo

let arr = ['Hola', 1, 2, 3]
saludar.apply(persona, arr)