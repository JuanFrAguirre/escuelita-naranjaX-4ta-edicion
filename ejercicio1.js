console.clear()

let jugadas = [2,1,3,2,1,2,2]

const jugar = (jugada)=> {
    let puntaje = 0
    jugadas.forEach(x => {
        if (jugada === 1) {
            if (x === 1) puntaje += 1
            if (x === 3) puntaje += 2
        }
        if (jugada === 2) {
            if (x === 2) puntaje += 1
            if (x === 1) puntaje += 2
        }
        if (jugada === 3) {
            if (x === 3) puntaje += 1
            if (x === 2) puntaje += 2
        }
    })
    return puntaje
}

console.log('Puntaje final con piedra =', jugar(1))
console.log('Puntaje final con papel =', jugar(2))
console.log('Puntaje final con tijera =', jugar(3))