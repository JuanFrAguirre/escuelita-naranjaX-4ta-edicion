console.clear()

let a = 5
let b = 20

function restore() {
    a=b=8
}

function opcion1(a,b) {
    a = b
    b = a
    return {a,b}
}

function opcion2(a,b) {
    let c=a
    b=a
    a=c
    return {a,b}
}

function opcion3(a,b) {
    let c=a
    a=b
    b=c
    return {a,b}
}

function opcion4(a,b) {
    let c=b
    a=b
    b=c
    return {a,b}
}

console.log(`Opcion 1:\na = ${opcion1(a,b).a}\nb = ${opcion1(a,b).b}\n`)
console.log(`Opcion 2:\na = ${opcion2(a,b).a}\nb = ${opcion2(a,b).b}\n`)
console.log(`Opcion 3:\na = ${opcion3(a,b).a}\nb = ${opcion3(a,b).b}\n`)
console.log(`Opcion 4:\na = ${opcion4(a,b).a}\nb = ${opcion4(a,b).b}`)