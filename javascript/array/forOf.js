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

for (const item of pokeArray) {
    console.log(item.name)
}