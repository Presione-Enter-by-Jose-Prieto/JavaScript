// Strings
let myName = 'Jose'
let myLastName = 'Prieto'
let myFullName = 'Hola, ' + myName + ' ' + myLastName + '. ¿Cómo estás?'
console.log(myFullName)

// Tipo de dato
console.log(typeof myFullName)

// Longitud de un string
console.log(myFullName.length)

// Acceder a un carácter por su posición (index)
console.log(myFullName[0])
console.log(myFullName[1])
console.log(myFullName[2])
console.log(myFullName[3])

// Métodos comunes de los strings
console.log(myFullName.toUpperCase()) // Pasa el string a mayúsculas
console.log(myFullName.toLowerCase()) // Pasa el string a minúsculas
console.log(myFullName.indexOf('Jose')) // Devuelve la posición del primer carácter del substring que se pasa como argumento
console.log(myFullName.includes('Jose')) // Devuelve true si el substring que se pasa como argumento se encuentra en el string
console.log(myFullName.slice(0, 4)) // Devuelve una copia del string desde el índice inicial hasta el índice final (sin incluirlo)
console.log(myFullName.replace('Jose', 'Alejandro')) // Reemplaza el substring que se pasa como primer argumento por el substring que se pasa como segundo argumento

// Template literals (plantillas de texto literales)
let message = `Hola, bienvenido al 
cursos de JavaScript`
console.log(message)

console.log(`Hola, bienvenido al curso de JavaScript, ${myName} ${myLastName}.`)
