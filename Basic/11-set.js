// set

// Declaración
let mySet = new Set()
console.log(mySet)

// Inicialización
mySet = new Set(["Jose","Prieto","Presiona Enter", 23, true])
console.log(mySet)

// Métodos comunes
// add y delete

mySet.add('japrieto@corsaje.edu.co')
console.log(mySet)

console.log(mySet.delete('japrieto@corsaje.edu.co'))
console.log(mySet.delete(2))

console.log(mySet)

// has
console.log(mySet.has("Jose"))
console.log(mySet.has("Alejo"))

// size
console.log(mySet.size)

// Convertir un Set a un Array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir de Array a Set
mySet = new Set(myArray)
console.log(mySet)

// Los Sets no permiten duplicados dentro de su lista, el array si, por es en Set no tenemos indices