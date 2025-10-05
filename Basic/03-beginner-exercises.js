// 1. Escribe un comentario en una línea
// Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "Hola, Mundo!"          // String
let myNumber = 42                       // Number
let myBoolean = true                    // Boolean
let myUndefined = undefined             // Undefined
let myNull = null                       // Null
let mySymbol = Symbol("mySymbol")       // Symbol
let myBigInt = BigInt(9007199254741991) // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString)    // string
console.log(typeof myNumber)    // number
console.log(typeof myBoolean)   // boolean
console.log(typeof myUndefined) // undefined
console.log(typeof myNull)      // object (esto es un comportamiento conocido de JavaScript)
console.log(typeof mySymbol)    // symbol
console.log(typeof myBigInt)    // bigint

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Hola, JS!"
myNumber = 100
myBoolean = false
myUndefined = undefined // No se puede cambiar a otro valor, ya que es undefined
myNull = null           // No se puede cambiar a otro valor, ya que es null
mySymbol = Symbol("newSymbol")
myBigInt = BigInt(12345678901234567890)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 123          // Cambiado a Number
myNumber = "Cuarenta y dos" // Cambiado a String
myBoolean = "true"      // Cambiado a String
myUndefined = null      // Cambiado a Null
myNull = undefined      // Cambiado a Undefined
mySymbol = "Not a symbol" // Cambiado a String
myBigInt = 9007199254741991 // Cambiado a Number

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myConstString = "Constante String"
const myConstNumber = 3.14
const myConstBoolean = true
const myConstUndefined = undefined
const myConstNull = null
const myConstSymbol = Symbol("constSymbol")
const myConstBigInt = BigInt(9876543210987654321)

// 9. A continuación, modifica los valores de las constantes
// myConstString = "Nuevo valor" // Error: Assignment to constant variable.
// myConstNumber = 2.71          // Error: Assignment to constant variable.
// myConstBoolean = false        // Error: Assignment to constant variable.
// myConstUndefined = null       // Error: Assignment to constant variable.
// myConstNull = undefined       // Error: Assignment to constant variable.
// myConstSymbol = Symbol("newConstSymbol") // Error: Assignment to constant variable.
// myConstBigInt = BigInt(12345678901234567890) // Error: Assignment to constant variable.

// Nota: No se pueden reasignar valores a constantes, por lo que las líneas anteriores están comentadas para evitar errores.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las líneas que producen errores están comentadas arriba.