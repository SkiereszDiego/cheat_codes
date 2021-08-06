// NUMBER
const number = 12000.54
const arrNumbers = [ 12000.54, 14000.54, 16000.54, 20000.45 ]

console.log('[ARRAY BRL]', arrNumbers.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})) // R$ 12.000,54,R$ 14.000,54,R$ 16.000,54,R$ 20.000,45
console.log('[BRL]', number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})) // R$ 12.000,54
console.log('[USD]', number.toLocaleString('en-US', { style: 'currency', currency: 'USD'})) // $12,000.54

// DATE
const date = new Date(Date.UTC(2021, 06, 10))

console.log('[UTC]', date.toLocaleString('pt-BR', { timeZone: 'UTC' })) // 10/07/2021 00:00:00