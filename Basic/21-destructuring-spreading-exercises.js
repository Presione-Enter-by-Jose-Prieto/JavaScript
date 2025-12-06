// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray = [1, 2, 3, 4, 5]
let [val0, val1] = myArray
console.log(val0), console.log(val1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [val2, val3, val4, val5, val6, val7 = 0] = myArray
console.log(val2), console.log(val3)
console.log(val4), console.log(val5)
console.log(val6), console.log(val7)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: 'Jose',
    age: 18,
    job: 'Desarrollador',
    email: 'joseprieto.dev@gmail.com',
    locate: 'Colombia'
}
let {name, age} = person
console.log(name), console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {job: propName1, locate: propName2} = person
console.log(propName1), console.log(propName2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
function Object(name, desc){
    this.name = name
    this.desc = desc
}

person.description = new Object('Descripción', 'Estoy trabajando por ahora.')
let {description: {name: nameDesc} } = person
console.log(nameDesc)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [6, 7, 8, 9, 10]
let myNewArray = [...myArray, ...myArray2]
console.log(myNewArray)

// 7. Usa propagación para crear una copia de un array
let copiaMyArray = [...myArray]
console.log(myArray)
console.log(copiaMyArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let personAdd = {
    address: 'Calle 0 #0-01 Colombia',
    languages: {
        english: 'B1',
        spanish: 'Native'
    },
    availability: 'freelance'
}

let completePerson = {...person, ...personAdd}
console.log(completePerson)

// 9. Usa propagación para crear una copia de un objeto
let copiaCompletePerson = {...completePerson}
console.log(copiaCompletePerson)

// 10. Combina desestructuración y propagación
let { languages } = completePerson
console.log(languages)
// Crea una copia del objeto `languages` y añade un nuevo idioma usando propagación
let newLanguages = { ...languages, french: 'A2' }
console.log(newLanguages)