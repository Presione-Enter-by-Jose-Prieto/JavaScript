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
    let myArrayStringsMayus = []
    for(let string of myArray){
        myArrayStringsMayus.push(string.toUpperCase())
    }
    return myArrayStringsMayus
}

console.log(arraytoUpperCase(myArrayStrings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num){
    let verdadero = true
    let cont = 0
    for(let i = 0; i <= num; i++){
        if(num % i == 0){
            cont++
        }
    }
    if(cont == 2){
        return verdadero
    }else{
        return verdadero = false
    }
}

console.log(esPrimo(6))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function comunElements(arrayUno, arrayDos){
    let newArray = []
    for(let elementoComun1 of arrayUno){
        for(let elementoComun2 of arrayDos){
            if(elementoComun1 == elementoComun2){
                newArray.push(elementoComun1)
            }
        }
    }
    return newArray
}

let arrayUno = [1,3,5,7,9,10]
let arrayDos = [2,4,6,8,10]

console.log(comunElements(arrayUno, arrayDos))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumPares(array){
    let suma = null 
    for (let num of array){
        if (num % 2 == 0) suma += num
    }
    return suma
}

let arrayNums = [1,2,3,4,6,8]
console.log(sumPares(arrayNums))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevaAlCuadrado(array){
    let arayAlCuadrado = []
    let cuadrado = null
    for (let num of array){
        cuadrado = num**2 
        arayAlCuadrado.push(cuadrado)
    }
    return arayAlCuadrado
}

let arraySinElevar = [1,2,3,4,5,6]
console.log(elevaAlCuadrado(arraySinElevar))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function stringInverso(string){
    let stringInverse = null
    stringInverse = string.split(' ').reverse().join(' ')

    return stringInverse
}

let string = 'Hola Mundo'
console.log(stringInverso(string))

/*
    NOTA DEL EJERCICIO:
    El método split() convierte una cadena (string) en un arreglo (array),
    dividiendo el texto en cada punto donde se indique el delimitador (por ejemplo, split(' ') separa por espacios).

    El método reverse() invierte el orden de los elementos dentro del arreglo.

    El método join() une todos los elementos del arreglo en una sola cadena,
    insertando entre ellos el delimitador especificado (por ejemplo, join(' ') los separa con un espacio). 
    En conjunto, split() → reverse() → join() permiten invertir el orden de las palabras en una cadena.
*/


// 10. Crea una función que calcule el factorial de un número dado

function factorialDeUnNumero(num){
    let factorial = 1
    for(let i = 1 ; i <= num; i++){
        factorial *= i
    }
    return factorial
}

console.log(factorialDeUnNumero(5))