// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
const copyOfCats = [...cats]


function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    return [...copyOfCats, name]
}

function prependCat(name) {
    return [name, ...copyOfCats]
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}