function LinkedList () {
    this.head = null // no apunta a ningún nodo porque la lista está vacía, no hay nada a qué apuntar.
}

function Node(value) {
    this.value = value
    this.next = null
}

/* let current = this.head // CURRENT es el nodo al que apunta
if (current.next !== null) 
current = current.next
current.next = newNode */

LinkedList.prototype.add = function (value) {
    // 1 Crear un nodo con ese valor (instanciar un nodo con ese valor).
    // 2 Agregar ese nodo nuevo al final de la lista
    var newNode = new Node(value)
    var current = this.head // la lista esta vacía

    if (!current) { // me pregunto si no tengo current
    // (current === null) <- también puede ser así.
        this.head = newNode // newNode pasa a ser el primer nodo
        return value
    }
    // 3 Ahora necesito que se analice la lista para encontrar el próximo nodo
    while (current.next){ // si tiene un nodo, dará true, si tiene null dará false
    //while (current.next !== null) <- también puede ser así.
        current = current.next
    }
    current.next = newNode
    return value
}

var miLista = new LinkedList()



miLista.add(5)
miLista.add(10)
miLista.add(15)

console.log(miLista);