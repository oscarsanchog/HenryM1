//* Recursión: Técnica en la que una función se llama a sí mísma para repetir un procedimiento.

function contarNumeros (num) {
    console.log(num); 
    if (num === 0) {
        return
    }
    contarNumeros(num - 1)
}

contarNumeros(10)