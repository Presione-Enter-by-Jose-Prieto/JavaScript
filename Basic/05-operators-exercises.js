// 1. Crea una variable para cada operación aritmética
let a = 10
let b = 5

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let exponente = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = a
asignacionSuma += b

let asignacionResta = a
asignacionResta -= b

let asignacionMultiplicacion = a
asignacionMultiplicacion *= b

let asignacionDivision = a
asignacionDivision /= b

let asignacionModulo = a
asignacionModulo %= b

let asignacionExponente = a
asignacionExponente **= b

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log('Operadores de comparación - Verdaderas')
console.log(! ( b > a ) )
console.log( a > b )
console.log( a == '10' )
console.log( a + b == 15)
console.log( b !== 10 )
console.log( a === 10 ) // Si fuese a === '10' sería false

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log('Operadores de comparación - Falsas')
console.log( a < b )
console.log( a === '10' )
console.log( a != 10 )
console.log( a + b != 15)
console.log( b >= 10 )

// 5. Utiliza el operador lógico and
console.log('Operadores lógicos - and')
console.log( a > b && b < 20 )

// 6. Utiliza el operador lógico or
console.log('Operadores lógicos - or')
console.log( a < b || b < a )

// 7. Combina ambos operadores lógicos
console.log('Operadores lógicos - and y or')
console.log( a != 10 && b > 10 || a > b )

// 8. Añade alguna negación
console.log('Operadores lógicos - Negación')
console.log(! ( a < b ) )

// 9. Utiliza el operador ternario
console.log('Operador ternario')
let isAdult = true
isAdult ? console.log('Es mayor de edad') : console.log('Es menor de edad')

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log('Combinación de operadores')
console.log( (a + b) == 15 || (b <= 5 && a > b) )