// 1. Crea un array que almacene cinco animales

let myArray = []
myArray.push('Perro')
myArray.push('Gato')
myArray.push('Jirafa')
myArray.push('Hipopotamo')
myArray.push('Loro')

console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift('Serpiente')
myArray.push('Paloma')

console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set()

mySet = new Set([
    'Cuando todo se vino abajo',
    'El alimento de los dioses',
    'Atrapado en la Red',
    'El Principito',
    'La divina comedia'
])

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add('Cuando todo se vino abajo') // Esta repetido no se agrega
mySet.add('Don Quijote')
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete('El alimento de los dioses')
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map()
myMap = new Map([
    ['1', 'Enero'],
    ['2', 'Febrero'],
    ['3', 'Marzo'],
    ['4', 'Abril'],
    ['5', 'Mayo'],
    ['6', 'Junio'],
    ['7', 'Julio'],
    ['8', 'Agosto'],
    ['9', 'Septiembre'],
    ['10', 'Octubre'],
    ['11', 'Noviembre'],
    ['12', 'Diciembre']
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has('5'))
console.log(myMap.get('5'))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set('verano', ['Junio', 'Julio', 'Agosto'])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newArray = ['pera', 'manzana', 'pera', 'uva', 'plátano']
let newSet = new Set(newArray)

let newMap = new Map()
newMap.set('frutas', newSet)

console.log(newMap)
console.log(newMap.get('frutas'))