//* El factorial de un número 5! => 5 * 5 * 4 * 3 * 2 * 1
//* tamnbién podríamos decir que el factorial de 5 es el factorial de 4 5! => 5*4
//*  5! => 5 * 4
//*  4! => 4 * 3
//*  3! => 3 * 2
//*  2! => 2 * 1
//*  1! => 1

function factorial (num) {
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(--num) // si doy un 5, esta función me lo va a multiplicar por 5 - 1 (4) y se volverá a ejecutar, hasta llegar a 1.
}

console.log(factorial(5))

function sumar(num) {
    if (num >= 10) return num
    console.log(num);
    return sumar(num + 2)
}

sumar(2)