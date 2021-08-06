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

// WILL FIND
const findSquirtle = pokeArray.find((pokemon) => pokemon.name === 'squirtle')

console.log(findSquirtle)

// WILL NOT FIND
const findAbra = pokeArray.find((pokemon) => pokemon.name === 'abra')

console.log(findAbra)