// Write your solution here!
// const cats = ["Milo", "Otis", "Garfield"]

// function destructivelyAppendCat(name) {
//     cats.push(name)
// }

// function destructivelyPrependCat(name) {
//     cats.unshift("Bob")
// }

// function destructivelyRemoveLastCat() {
//     cats.pop()
// }

// function destructivelyRemoveFirstCat() {
//     cats.shift()
// }

// function appendCat(name) {
//     return [...cats, name]
// }

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}
// destructivelyAppendCat("Roger")

function destructivelyPrependCat(name){
    return cats.unshift(name)
}
// destructivelyPrependCat("Bob")


function destructivelyRemoveLastCat(){
    return cats.pop()
}
// destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    return cats.slice(0, -1)
}

function removeFirstCat(){
    return cats.slice(1)
}

