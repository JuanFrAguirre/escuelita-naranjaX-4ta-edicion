console.clear()

const check = (xx,yy) => {
    let x = xx
    let y = yy
    return (x > 0 && y < 0)
}

console.log(`Opcion1:\n${check(5,3)}`)
console.log(`Opcion2:\n${check(2,0)}`)
console.log(`Opcion3:\n${check(2,-3)}`)
console.log(`Opcion4:\n${check(0,0)}`)
console.log(`Opcion5:\n${check(-3,-2)}`)