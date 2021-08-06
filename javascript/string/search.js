const nome = "Allan Foppa Fagundes"

console.info('[MOSTRA A POSIÇÃO EM QUE ENCONTROU A STRING]', nome.search('Foppa')) // 6

const nomeV2 = "allan foppa Fagundes"
const uppercaseLetter = /[A-Z]/g

console.info('[MOSTRA A POSIÇÃO EM QUE ENCONTROU A LETRA MAIÚSCULA]', nomeV2.search(uppercaseLetter)) // 12