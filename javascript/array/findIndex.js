const pokeArray = [
    "bulbasaur",
    "charmander",
    "squirtle",
    "abra",
]

function findSquirtleInArr(pokemonName){
    return pokemonName === 'squirtle'
}

const findSquirtle = pokeArray.findIndex(findSquirtleInArr) // 2

console.log(findSquirtle)