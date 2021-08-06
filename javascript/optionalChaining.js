
const pokemon = {
    "name": "squirtle",
    "type": "water"
}

const pokemonName = pokemon?.name
const pokemonNumber = pokemon?.pokedex_number

console.log(pokemonName) // squirtle
console.log(pokemonNumber) // undefined

if(pokemonName !== undefined) console.log('Tem o nome')
if(pokemonNumber !== undefined) console.log('Tem o número')