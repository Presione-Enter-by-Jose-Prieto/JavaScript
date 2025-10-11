// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// for (let i = 1; i <= 20; i++){
//     console.log(i)
// }

// for (let i = 0; i < 20; i++){
//     console.log(i+1)
// }

for (let i = 1; i <= 20; i++) console.log(i);


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0
for (let i = 0; i <= 100; i++){
    sum = sum + i
}
console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i = 0
while ( i <= 50 ){
    if( i % 2 == 0 ){
        console.log(i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const namesArray = ['Jose','James','Julian','Tovar','Maria','Emanuel']
for (let nombre of namesArray){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = 'aAeEiIoOuU'
let vocales = 0

for (let letra of myString.toLowerCase()){
    if('aeiou'.includes(letra) || 'AEIOU'.includes(letra)){
        vocales++
    }
}

console.log(`El número de vocales en el String es de ${vocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNums = [1,2,3,4,5,6]
let producto = 1
for (let numero of arrayNums){
    producto = producto * numero
}
console.log(`El producto de los numeros del array es ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1 ; i <= 10; i++){
    console.log(5*i)
}

// 8. Usa un bucle para invertir una cadena de texto

let message = 'Hola JS!'
let inverseMesaage = ''

// for (let i = message.length-1; i>=0; --i){
//     inverseMesaage += message[i]
// }

for (let char of message){
    inverseMesaage = char + inverseMesaage 
}

console.log(inverseMesaage)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


let a = 0, b = 1, c = 0
i = 0
console.log(a)
console.log(b)
while (i<8){
    c = a+b
    console.log(c)
    a = b
    b = c
    i++
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numsArray = [42, 7, 95, 63, 18, 2, 54, 80, 37, 99, 13, 74, 61, 9, 47, 100, 33, 88, 25, 59]
let newArray = []
for (let num of numsArray){
    if(num > 10){
        newArray.push(num)
    }
}

console.log(newArray)