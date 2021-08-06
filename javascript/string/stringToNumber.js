const numberOne = 100
const numberTwo = '100'
const numberThree = '100.54'

console.log(typeof numberOne)
console.log('[ANTES DE CONVERTER (INT)]', typeof numberTwo)
console.log('[ANTES DE CONVERTER (FLOAT)]', typeof numberThree)

const numberTwoToInt = +numberTwo
const numberThreeToFloat = +numberThree

console.log('[DEPOIS DE CONVERTER (INT)]', typeof numberTwoToInt)
console.log('[DEPOIS DE CONVERTER (FLOAT)]', typeof numberThreeToFloat)