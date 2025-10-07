// 1. Concatena dos cadenas de texto
const myNames = 'José Alejandro'
const myLastNames = 'Prieto Salcedo'
const fullName = `Hola, ${myNames} ${myLastNames} bienvenido al programa!`
console.log(fullName)

// 2. Muestra la longitud de una cadena de texto
const text = 'Hola, bienvenido al curso de JavaScript'
const textLength = text.length
console.log(textLength)

// 3. Muestra el primer y último carácter de un string
const firstChar = text[0]
const lastChar = textLength - 1
const firstCharacter = `El primer carácter es: ${firstChar}`
const lastCharacter = `El último carácter es: ${text[lastChar]}`
console.log(firstCharacter)
console.log(lastCharacter)

// 4. Convierte a mayúsculas y minúsculas un string
const upperCase = text.toUpperCase()
const lowerCase = text.toLowerCase()
console.log(upperCase)
console.log(lowerCase)

// 5. Crea una cadena de texto en varias líneas
const multiLineText = `Hola, bienvenido al
curso de JavaScript
este es un mensaje de 
varias líneas`
console.log(multiLineText)

// 6. Interpola el valor de una variable en un string
const courseName = 'JavaScript'
const welcomeMessage = `Hola, bienvenido al curso de ${courseName}`
console.log(welcomeMessage)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(text.replace(/ /g, '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text.includes('JavaScript'))

// 9. Comprueba si dos strings son iguales
console.log(text === multiLineText)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(text.length === multiLineText.length)