//! DOS TIPOS DE IGUALDADES
//* Igualdad por valor
//* Igualdad por referencia

//! Por valor:
let x = 10
let y = x
x = 5

console.log(x); // 5 
console.log(y); // 10 Porque y tomó el valor de x ANTES de que se le reasignara un nuevo valor.

//! Por referencia
//* Aplica a los ARRAYS y a los OBJETOS

let z = [1, 2, 3]
let n = z

n.push(4)

console.log(z); // [1, 2, 3, 4]
console.log(n); // [1, 2, 3, 4] Porque tanto x como y APUNTAN a un espacio en memoria que guarda el array, no apunta hacia x.

//* con OBJETOS:

var persona1 = {
    nombre: 'Jorge',
    apellido: 'Vega',
}

var persona2 = persona1

persona1.nombre = 'Óscar'

console.log(persona1);
console.log(persona2); // Dan el mismo resultado, porque APUNTAN a un espacio en la memoria.
console.log(persona2 == persona1) // true, porque son iguales.