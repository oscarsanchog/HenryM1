function HashTable() {
    this.buckets = []
    this.numbuckets = 35
}

function hash(key) {
    // 0. recorro el string q ingresaron y lo recorro con un for para sacar el código num de cada letra, y luego lo sumo
    // 1. sumo el código numérico de cada caracter
    // 2. total % numBuckets -> mi resultado final que es la posición del array donde inserto el objeto.
}

// cuando no es un string hay que arrojar este error:
// throw TypeError('Keys must be strings')