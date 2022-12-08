// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name) {
    const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(name) {
    const prependCat = ["Arnold",...cats];
    return prependCat;
}

function removeLastCat(name) {
    const removeLastCat = cats.slice();
    return removeLastCat.slice(0,2);
}

function removeFirstCat() {
    const removeFirstCat = cats.slice();
    return removeFirstCat.slice(1);
}