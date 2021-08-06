const pokedexNumber = [ 1, 4, 7, 10 ]

const squirtle = {
    "pokedex_number": 7,
    "name": "squirtle",
    "type": "water"
}

let [one, seven, ...others] = pokedexNumber // 1, 7, restante do array

console.log(one) // 1
console.log(seven) // 7

let { name: pokemonName, ...allInfo } = squirtle

console.log(pokemonName) // squirtle
console.log(allInfo) // {pokedex_number: 7, type: "water"}
console.log(allInfo.type) // "water"
