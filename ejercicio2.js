console.clear()

let x = 1327

const calculateLastDigit = (number, dividend) => {
    return number % dividend
}

console.log('X % 2 = ',calculateLastDigit(x, 2) )
console.log('X % 3 = ',calculateLastDigit(x, 3) )
console.log('X % 5 = ',calculateLastDigit(x, 5) )
console.log('X % 10 = ',calculateLastDigit(x, 10) )
console.log('X % 100 = ',calculateLastDigit(x, 100) )