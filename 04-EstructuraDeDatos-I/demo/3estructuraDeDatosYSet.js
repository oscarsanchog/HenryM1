//* Las estructuras de datos que veremos serán arreglos, LinkedList, árboles, pilas, colas, tablas Hash

//! Set: hace que no se repitan los datos.
let miSet = new Set()

miSet.add(5)
miSet.add(5)
miSet.add(7)

console.log(miSet);

//* Stack: Es una estructura de datos que se tiene que crear, xq no existe nativamente. Es una clase
// los stacks son objetos que tienen propiedades y métodos. El stack puede agregar un elemento y sacar
// un elemento (estos serán los métodos, que son FUNCIONES).
// para representar una pila usará un array
//! usa .push() y .pop()
// Se apilan uno encima de otro y al momento de sacarlo, se rescata el último que sacó LIFO 

function Stack() {
    this.arr = [] // es una propiedad
}

Stack.prototype.push = function (value) { // sí tiene parámetro porque tengo que saber qué valor agregar
    this.arr.push(value)
}
Stack.prototype.pop = function () { // no tiene porque automáticamente quita el último que fue ingresado.
    this.arr.pop()
}

let miStack = new Stack() // Creo una instancia de stack. Creo un nuevo stack, un nuevo ejemplar

miStack.push (50)
miStack.push ('hola')

console.log(miStack);

miStack.pop()

console.log(miStack);

//! QUEUE

//* Es una fila. El primero que entra es el primero que sale de la fila (FIFO first in first out)

var queue = ['persona 1', 'persona 2', 'persona 3']

queue.unshift('persona 4')

console.log(queue);

function Queue() {
    this.arr = []
}

Queue.prototype.enqueue = function() {}
Queue.prototype.dequeue = function() {}
Queue.prototype.size = function() {}