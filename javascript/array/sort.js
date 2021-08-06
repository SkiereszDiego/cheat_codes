const pokeArray = [
    {
        "pokedex_number": 7,
        "name": "squirtle",
        "type": "water"
    },
    {
        "pokedex_number": 4,
        "name": "charmander",
        "type": "fire"
    },
    {
        "pokedex_number": 1,
        "name": "bulbasaur",
        "type": "grass"
    }
]

pokeArray.sort((number1, number2) => {
    if (number1.pokedex_number < number2.pokedex_number) return -1
    if (number1.pokedex_number > number2.pokedex_number) return 1
    return 0
})

console.log(pokeArray)