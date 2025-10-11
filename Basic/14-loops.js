// loops o bucles

// for

for(let i = 0; i < 5; i++){
    console.log(`Hola Mundo desde la posición ${i + 1}`)
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i <5){
    console.log(`Hola Mundo desde la posición ${i + 1}`)
    i++
}

// do while se ejecuta minimo una vez

i = 9
do {
    console.log(`Hola Mundo desde la posición ${i + 1}`)
    i++
}while(i <5)

// for of

let animales = ['Perro', 'Gato', 'Loro']

for (let variable of animales){
    console.log(`${variable}`)
}

let myString = 'Hola, JS!'

for (let variable of myString){
    console.log(`${variable}`)
}

// Break y Continue

numbers = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numbers.length; i++){
    if ( i == 5){
        continue
    } else if( i == 6){
        break
    }
    console.log(`${i}`)
}