const pokeArray = [
    "bulbasaur",
    "charmander",
    "squirtle",
    "abra",
]

function findSquirtleInArr(pokemonName){
    return pokemonName === 'squirtle'
}

const findSquirtle = pokeArray.some(findSquirtleInArr) // true

console.log(findSquirtle)