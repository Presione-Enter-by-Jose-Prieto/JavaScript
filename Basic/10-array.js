// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [2]
myArray2 = new Array(2)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4,5]
myArray2 = new Array(1,2,3,4,5)

console.log(myArray)
console.log(myArray2)

myArray = ["Jose","Prieto", 23, true]
myArray2 = new Array("Jose","Prieto", 23, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = 'Jose'
myArray2[1] = 'Prieto'
myArray2[2] = '2025'

console.log(myArray2)

// Métodos Comunes

myArray = []

// push y pop

myArray.push('Jose')
myArray.push('Prieto')
myArray.push('2025')
myArray.push('Alejo')

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo elemento del array y lo devuleve
console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento del array y lo devuleve
console.log(myArray)

myArray.unshift('Jose') // Agrega elementos al inicio del array
console.log(myArray)

console.log(myArray.length)

//clear

myArray = []
console.log(myArray)

myArray.length = 0
console.log(myArray)

// slice

myArray.push("Jose","Prieto", 23, true)
let myNewArray = myArray.slice(0,1)
console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1,2)
console.log(myArray)

myArray = ["Jose","Prieto","Josesito", 23, true]

myArray.splice(1,2,'Nuevo elemento')
console.log(myArray)