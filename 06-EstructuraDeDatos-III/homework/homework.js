'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
   if (value < this.value) { // es menor
      if (this.left) { // hay algo. Me pregunto si tengo algo a la izquierda
         return this.left.insert(value) // llo que hago si tengo algo
      } else { // no hay nada, lo inserto. Es lo que hago si NO tengo algo
         this.left = new BinarySearchTree(value)
         return value
      }
   } else { //es mayor o igual, da lo mismo
      if (this.right) { //hay algo
         return this.right.insert(value)
      } else { // no hay nada, lo inserto
         this.right = new BinarySearchTree(value)
         return value
      }
   }
}

BinarySearchTree.prototype.size = function () {
   // Contar la cantidad de nodos que tiene mi árbol. La suma es 1 (nodo primero) + nodos de la izq + nodos de la der
   var suma = 1
   if (this.left) suma += this.left.size()
   if (this.right) suma += this.right.size()
   return suma
}

//! FUNCIÓN CONTAINS

// * Qué hace mi función?
//* 1. Pregunta si el primer nodo es el valor por buscar
//* 2. Si no, le pregunta a la izquierda. Si lo tiene, return
//* 3. Si no, le pregunta a la derecha.
//* 4. Si ninguno lo tiene, return false

BinarySearchTree.prototype.contains = function (value) {
   if (this.value === value) return true
   if (this.left && this.left.contains(value)) return true
   if (this.right && this.right.contains(value)) return true
   return false
}

//! FUNCIÓN DEPTHFIRSTFOR EACH
//* El objetivo es recorrer el árbol en el orden indicado, ejecutando la cb, pasando por parámetro el valor del nodo, y la forma de recorrerlo.
//? POST-ORDER = I D N (izquierda, derecha, nodo)
//? IN-ORDER = I N D
//? PRE-ORDER = N I D

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   switch (order) {
      case 'post-order':
         this.left && this.left.depthFirstForEach(cb, order)
         this.right && this.right.depthFirstForEach(cb, order)
         cb(this.value)
         break
      
      case 'pre-order':
         cb(this.value)   
         this.left && this.left.depthFirstForEach(cb, order)
         this.right && this.right.depthFirstForEach(cb, order)
         break

      default:
         this.left && this.left.depthFirstForEach(cb, order)
         cb(this.value)
         this.right && this.right.depthFirstForEach(cb, order)
         break
   }
}

 //! breadthfirstforeach

 BinarySearchTree.prototype.breadthFirstForEach = function (cb, pendiente) {
   if (!pendiente) { // Pregunto si no hay pendientes. Si no hay, creo un array
      var pendiente = []
   }

   cb(this.value) // ejecuto la callback que me pasan

   this.left && pendiente.push(this.left) // pregunto si hay nodos a la izquierda y pusheo sus pendientes al array de pendientes
   this.right && pendiente.push(this.right) // pregunto si hay nodos a la derecha y pusheo sus pendientes al array de pendientes

   if (pendiente.length > 0) { // pregunto si aún quedan pendientes
      pendiente.shift().breadthFirstForEach(cb, pendiente) //saco el pendiente, y vuelvo a ejecutar la función, pasándole la nueva cb y el pend.
   }
 }




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
