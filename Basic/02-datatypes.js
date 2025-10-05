// String (Cadena de texto)
let myName = "Alejandro"
let myAlias = 'Alejo'
let myEmail = `japrieto@corsaje.edu.co`

// Number (Números)
let myAge = 17 // Entero
let myAltura = 1.75 // Decimal

// Boolean (Booleanos)
let isStudent = true // Verdadero
let isTeacher = false // Falso

// Undefined (Indefinido)
let myPhone // No tiene valor asignado
console.log(myPhone) // undefined 

// Null (Nulo)
let myAddress = null // No tiene valor asignado

// Symbol (Símbolo)
let mySymbol = Symbol("mySymbol")

// BigInt (Entero grande)
let myBigInt = BigInt(90071992547419919007199254741991) // O usar el sufijo 'n' al final del número

// Mostrar los tipos de datos en la consola
console.log(typeof myName) // string
console.log(typeof myAge) // number
console.log(typeof isStudent) // boolean
console.log(typeof myPhone) // undefined
console.log(typeof myAddress) // object (esto es un comportamiento conocido de JavaScript)
console.log(typeof mySymbol) // symbol
console.log(typeof myBigInt) // bigint