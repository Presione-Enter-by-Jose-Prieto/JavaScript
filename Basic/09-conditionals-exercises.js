// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = 'Andres'
if (myName == 'Andres'){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usuario = 'ANDRES'
const password = '0916202129'

if ( usuario == 'ANDRES' && password == '0916202129'){
    console.log('bienvenidos')
} else { 
    console.log('usuario o contraseña incorrecta')
} 

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 'juan'

if (numero > 0){
    console.log('el numero q ingresaste es positivo')
} else if (numero < 0){
    console.log('el numero q ingresaste es negativo')
} else if (numero == 0){
    console.log('el numero q colocaste es igual a cero ')
} else {
    console.log('lo q colocaste no es un numero')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 19
let edadRestante = 18 - edad

if (edad >= 18){
    console.log('Puedes Votar')
}else{
    console.log('No puedes votar aun, te faltan', edadRestante, 'años')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let valor = edad >= 18 ? 'Adulto' : 'Menor'
console.log(valor)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 7

switch(mes){
    case 0:
    case 1:
    case 2:
        console.log('Primavera')
        break
    case 3:
    case 4:
    case 5:
        console.log('Verano')
        break
    case 6:
    case 7:
    case 8:
        console.log('Otoño')
        break
    case 9:
    case 10:
    case 11:
        console.log('Invierno')
        break
    default:
        console.log('Mes del año incorrecto')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch(mes){
    case 0:
        console.log('31 días')
        break
    case 1:
        console.log('28 días')
        break
    case 2:
        console.log('31 días')
        break
    case 3:
        console.log('30 días')
        break
    case 4:
        console.log('31 días')
        break
    case 5:
        console.log('30 días')
        break
    case 6:
        console.log('31 días')
        break
    case 7:
        console.log('31 días')
        break
    case 8:
        console.log('30 días')
        break
    case 9:
        console.log('31 días')
        break
    case 10:
        console.log('30 días')
        break
    case 11:
        console.log('31 días')
        break
    default:
        console.log('Mes del año incorrecto')
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 1
switch(idioma){
    case 1:
        console.log('Hola Mundo')
        break
    case 2:
        console.log('Hello World')
        break
    case 3:
        console.log('Hallo Welt')
        break
    default:
        console.log('Idioma no Valido')
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7