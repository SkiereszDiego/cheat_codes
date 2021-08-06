var pokemon = {
    name: 'squirtle',
    number: 7,
    type: 'water'
}

var pokemonEV2 = {
    number: 9,
    type: 'water'
}

var pokemonEV3 = {
    name: 'blastoise',
    number: 9
}

const squirtle = pokemon.name || 'blastoise'

console.log('[OUTPUT = squirtle]', squirtle)

const wartotle = pokemonEV2.name || 'wartotle'

console.log('[OUTPUT = wartotle]', wartotle)

const blastoise = pokemonEV3.type || 'water'

console.log('[OUTPUT = water]', blastoise)