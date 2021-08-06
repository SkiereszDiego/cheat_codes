arr = [1, 2, 3 , 4, 10, 11]

simpleArraySum = (arr) => {
    let sum = 0
    for (var iterator of arr) sum += iterator
    return sum
}

console.log(simpleArraySum(arr))