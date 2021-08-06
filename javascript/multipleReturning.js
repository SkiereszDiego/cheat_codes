
function getPokemon() {
  let name = 'squirtle', type = 'water'

  return {
    name,
    type
  }
}

// Ex: 1

let pokemon = getPokemon()

let pokemonName = pokemon.name
let pokemonType = pokemon.type

// Ex: 2

let { name, type } = getPokemon()