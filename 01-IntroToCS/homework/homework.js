'use strict';

function BinarioADecimal(num) {
   let suma = 0
   let array = num.split('') // para convertir de un string a un array
   let arrayReverse = array.reverse() // para dar vuelta ese reverse
   for (let i = 0; i < num.length; i++) { // para recorrer el array
      suma += arrayReverse[i] * 2 ** i // Esta es la fórmula
   }
   return suma
}

function DecimalABinario(num) {
   let binario = []
   while (num >= 1) {
      let resto = Math.trunc(num % 2)
      num = num / 2
      binario.unshift(resto)
   }
return binario.join('')
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
