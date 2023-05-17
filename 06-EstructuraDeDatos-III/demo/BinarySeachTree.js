function binarySearchTree (value) {
    this.value = value
    this.left = null
    this.right = null
}

//* MÉTODO INSERT

binarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
        if (!this.left) { // es menor al nodo superior
            this.left = new binarySearchTree (value)
            return value
        } else {
            this.left.insert(value)
        }
    } else { // es mayor al nodo superior
        // homework
    }
}

var miArbol = new binarySearchTree(10)

console.log(miArbol);
miArbol.insert(7)
console.log(miArbol);

//* MÉTODO SIZE

binarySearchTree.prototype.size = function () {
    var count = 1
    if (this.left) count += this.left.size()
    if (this.right) count += this.right.size()
    return count
}



console.log(miArbol.size());

//! CLaves
//* 1) Entender qué quiero que haga mi función
//* 2) COnfiar en que mi función hace lo que tiene que hacer
//* 3) Nos van a pasar un número , no un strnig, ni metodo ni nada. Si es un string, se debe contar algo del string.

//*  DepthFirstForEach

binarySearchTree.prototype.DepthFirstForEach = function (cb) {
    // POSTORDER (IZQUIERDA A DERECHA, Nodo, I D N)
    // this.left.DepthFirstForEach(cb)
    // this.right.DepthFirstForEach(cb)
    // cb(this.value)

    // (Nodo Izquierda derecha NID)
    // cb(this.value)
    //  this.left.DepthFirstForEach(cb)
    // this.right.DepthFirstForEach(cb)
}
