const odd = [ 1, 3, 5 ]
let nums = [ 2, 4, 6, ...odd]

console.log(nums)

const squirtle = {
    "pokedex_number": 7,
    "name": "squirtle",
    "type": "water"
}

let pokemonInfo = {
    ...squirtle,
    "evolution": "wartotle"
}

console.log(pokemonInfo)