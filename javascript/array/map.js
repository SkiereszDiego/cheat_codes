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

const pokemonNames = pokeArray.map((pokemon) => pokemon.name)

console.log(pokemonNames)

const pokemonTypes = pokeArray.map((pokemon) => pokemon.type)

console.log(pokemonTypes)

