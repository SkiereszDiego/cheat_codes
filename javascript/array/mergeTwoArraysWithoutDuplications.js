const arr = [ 1, 2, 3 ]
const arr2 = [ 8, 9, 1, 4, 5 ]

const arrMerge = (arr, arr2) => {
    return [...new  Set([...arr, ...arr2])]
}

console.log(arrMerge(arr, arr2))