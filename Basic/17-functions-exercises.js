// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a = 0, b = 0) {
    return a + b
}

let result = suma(5, 10)
console.log(result)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayorNumero(array) {
    let numMayor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > numMayor) {
            numMayor = array[i]
        }
    }
    return numMayor
}

let myArray = [1, 2, 3, 4, 99, 5, 1, 4, 55, 100, 32, 8, 67, 1, 2, 32.4];
result = mayorNumero(myArray);
console.log(result);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let myString = 'Hola JavaScript'
let cont = 0
function contarVocales(myString){
    for(let letra of myString){
        let letralowercase = letra.toLowerCase()
        if('aeiou'.includes(letralowercase)){
            cont++
        }
    }
    return cont
}

console.log(contarVocales(myString))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let myArrayStrings = ['Hola Mundo', 'Hola Js', 'Hola JavaScript', 'Hola José']
function arraytoUpperCase(myArray){
    
}
console.log(arraytoUpperCase(myArrayStrings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado