// if, else if, else

let age = 41

if (age == 40){
    console.log('La edad es 40')
}

if (age == 40){
    console.log('La edad es 40')
} else {
    console.log('La edad no es 40')
}

if (age == 40){
    console.log('La edad es 40')
} else if (age > 40){
    console.log('La edad es mayor a 40')
} else {
    console.log('La edad es menor a 40')
}

// Condicional ternario

let messagee = age == 40 ? 'La edad es 40' : 'La edad no es 40'
console.log(messagee)

// Switch

let day = 5
let dayName = ''

switch (day){
    case 0:
        dayName = 'Domingo'
        break
    case 1:
        dayName = 'Lunes'
        break
    case 2:
        dayName = 'Martes'
        break
    case 3:
        dayName = 'Miércoles'
        break
    case 4:
        dayName = 'Jueves'
        break
    case 5:
        dayName = 'Viernes'
        break
    case 6:
        dayName = 'Sábado'
        break
    default:
        dayName = 'Día no válido'
}

console.log(`El día es: ${dayName}`)