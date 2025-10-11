// Map

let myMap = new Map()
myMap = new Map([
    ["name", "Jose"],
    ["email", "japrieto@corsaje.edu.co"],
    ['age', 17 ]
])

console.log(myMap)

// Métodos y propiedades

// set => agrega o actualiza une elemento del mapa
myMap.set('alias','Alejo')
myMap.set('age','18')

console.log(myMap)

// get
console.log(myMap.get('name'))
console.log(myMap.get('name2'))

// keys, values y entries

console.log(myMap.keys()) // Me muestra todas las keys de busqueda
console.log(myMap.values()) // Me regresa todos los values
console.log(myMap.entries()) // Me lista todo el mapa

// size

console.log(myMap.size)

// has

console.log(myMap.has('name'))
console.log(myMap.has('name2'))

// delete

myMap.delete('email')
console.log(myMap)

// clear

myMap.clear()
console.log(myMap)
