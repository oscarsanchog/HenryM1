//! Explicaciones: Daiana M1 Repaso

//* 1. Implementar el método changeNotNumbers dentro del prototipo de LinkedList. Este método debe identificar todos aquellos valores que no puedan 
//* convertirse en números y reemplazar a cada uno por la palabra 'Kiricocho'. Al finalizar, debe devolver la cantidad de cambios realizados.

LinkedList.prototype.changeNotNumbers = function () {
    let counter = 0
    let current = this.head

    while(current) {
        let number = Number(current.value)
        
        if (isNaN(number)) {
            counter++
            current.value = 'Kikirocho'
        }
        current = current.next
    }
    return counter
}

//* 2. Tomando un objeto dodne cada propiedad puede contener cualquier tipo de dato, escribe una función que cuente y retorne la cantidad de 
//* propiedades de objeto a cualquier nivel, sea el inicial u objetos anidados.

function countProps (objeto) {
    let counter = 0

    for (let prop in objeto) {
        counter++

        if (typeof objeto[prop] === 'object') {
            if (!Array.isArray(objeto[prop])) {
                counter += countProps(objeto[prop])
            }
        }
    }
    return counter
}

//* 3. Escribe una función que tome dos queues (colas) y las unifique en una nueva, agregando alternadamente los elementos de las originale

function mergeQueues (queueOne, queueTwo) {
    let newQueue = new Queue()

    while (queueOne.size() || queueTwo.size()) {
        let firstqueue = queueOne.dequeue()
        let secondqueue = queueTwo.dequeue()

        if (firstqueue) newQueue.enqueue(firstqueue)
        if (secondqueue) newQueue.enqueue(secondqueue)
    }
    return newQueue
}