// Objects

// Sintaxis

let person = {
    name: "José",
    edad: 18,
    alias: "Alejo"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación
person.name = "Alejandro"
console.log(person.name)

console.log(typeof person.edad)
person.edad = "19"
console.log(typeof person.edad)

// Eliminar propiedades

delete person.edad
console.log(person)

// Nueva propiedad

person.email = "joseprieto.dev@gmail.com"
console.log(person)

// Métodos (funciones)

let person2 = {
    name: "José",
    edad: 18,
    alias: "Alejo",
    walk: function(){
        console.log("La persona camina.")
    }
}

person2.walk()

// Anidación de objetos

let person3 = {
    name: "José",
    edad: 18,
    alias: "Alejo",
    walk: function(){
        console.log("La persona camina.")
    },
    job: {
        name: "Developer",
        exp: 3,
        work: function(){
            console.log(`La persona ${this.name} trabaja`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

person = {
    name: "José",
    edad: 18,
    alias: "Alejo"
}

let person4 = {
    name: "José",
    edad: 18,
    alias: "Alejo"
}

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for(let key in person4){
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age){
    this.name = name
    this.age = age
}

let person5 = new Person("Jose", 18)
console.log(person5)

console.log(typeof person4)
console.log(typeof person5) 