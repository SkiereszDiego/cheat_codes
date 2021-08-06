
const pokemonList = [
  'Squirtle',
  'Wartotle',
  'Blastoise'
]

const pokemonName = 'Squirtle'
const pokemonName2 = 'Charmander'

if(pokemonList.includes(pokemonName)) console.log('[SQUIRTLE IS INCLUDE]')
if(!pokemonList.includes(pokemonName2)) console.log('[CHARMANDER IS NOT INCLUDE]')

// ===============================================================================

let x = 'abc'

if(x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
  console.log(true)
}

if(['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  console.log(true)
}

let a = ['abc', 'def', 'ghi', 'jkl'].includes(x)