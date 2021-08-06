
function pokemonInfo(pokedex, name, type) {
    console.log(`O ${name} é do tipo ${type} e na pokedéx é o número ${pokedex}`)
}

function pokemonInfoArguments({pokedex, name, type}) {
    console.log(`O ${name} é do tipo ${type} e na pokedéx é o número ${pokedex}`)
}

pokemonInfo('water', 'squirtle', 7)

pokemonInfoArguments({
    type: 'water',
    pokedex: 7,
    name: 'squirtle'
})