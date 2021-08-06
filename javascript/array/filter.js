const pokeArray = [
    {
        "pokedex_number": 1,
        "name": "bulbasaur",
        "type": "grass"
    },
    {
        "pokedex_number": 4,
        "name": "charmander",
        "type": "fire"
    },
    {
        "pokedex_number": 7,
        "name": "squirtle",
        "type": "water"
    }
]

// ONLY FILTER
const waterPokemon = pokeArray.filter(pokemon => pokemon.type === 'water')
console.log(waterPokemon)

// FILTER AND GET ESPECIFIC INFORMATION
const grassPokemon = pokeArray
    .filter(pokemon => pokemon.type === 'grass')
    .map((pokemon) => pokemon.name)
console.log(grassPokemon)