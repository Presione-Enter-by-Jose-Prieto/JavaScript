// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Jose",
    age: 18,
    job: "Developer"
}

// 2. Accede y muestra su valor
console.log(person)

// 3. Agrega una nueva propiedad
person.work = "Trabajando ahora"

// 4. Elimina una de las 3 primeras propiedades
delete person.job

// 5. Agrega una función e invócala
person.status = function status(){ 
    console.log(`${this.name} esta trabajando.`)
}

person.status()
// 6. Itera las propiedades del objeto

for(let key in person){
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado

function Objeto(name, age){
    this.name = name
    this.age = age
}

person.work = new Objeto("Developer Backend", 2)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person.work.name)
console.log(person.work.age)

// 9. Comprueba si los dos objetos creados son iguales
let obj1 = new Objeto("Developer Backend", 2)
let obj2 = new Objeto("Developer Backend", 2)

console.log(obj1 == obj2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(obj1.name == obj2.name)