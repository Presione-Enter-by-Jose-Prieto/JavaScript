// Funciones

// Simple

function myFunc(){
    console.log('Hola, función!')
}
for (let i = 0; i < 5; i++) myFunc()

// Con Parametros

function myFuncWithParams(name){
    console.log(`Hola, ${name}!`)
}

myFuncWithParams('José')
myFuncWithParams('Alejandro')

// Funciones anonimas

const myFunc2 = function (name){
    console.log(`Hola, ${name}!`)
}

myFunc2('José Prieto')

// Arrow Funciones

const myFunc3 = (name) => {
    console.log(`Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}!`)

myFunc3('José Prieto')
myFunc4('José Prieto')

// Parámetros

function suma(a,b){
    console.log(a+b)
}

suma(10,5)

function defaultSuma(a= 0, b= 0){
    console.log(a+b)
}

defaultSuma()
defaultSuma(5)
defaultSuma(5, 10)
defaultSuma(b = 5)

// Retorno de valores

function mult(a, b){
    return a*b
}

let result = mult(5,10)
console.log(result)
console.log(mult(5,10))

// Funciones anidadas

function extern(){
    console.log('Función externa')
    function intern(){
        console.log('Función interna')
    }
    intern()
}

extern()
// intern() esta fuera del Scope

// Funcion de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc3, 'Función de orden superior' )

// forEach

let myArray = [1, 2, 3, 4]

let mySet = new Set(["Jose","Prieto","Presiona Enter", 23, true])

let myMap = new Map([
    ["name", "Jose"],
    ["email", "japrieto@corsaje.edu.co"],
    ['age', 17 ]
])


// myArray.forEach(function (value){
//     console.log(value)
// })

myArray.forEach((value) => console.log(value))
mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))