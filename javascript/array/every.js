const pokeArray = [
    "bulbasaur",
    "charmander",
    "squirtle",
    "abra",
]

// const pokeArray = [
//     "squirtle",
//     "squirtle",
//     "squirtle",
//     "squirtle",
// ]

const findSquirtleInArr = (pokemonName) => pokemonName === 'squirtle'

const findSquirtle = pokeArray.every(findSquirtleInArr) // false

console.log(findSquirtle)