const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => {
    return num + 10
})


console.log(newNums)

const newNums2 = myNums.map((num) => {
    if (num % 2 == 0) return num + 5
})


console.log(newNums2)


// chaining  - map pe map pe filter
//  pehli chain ka result second chain mai pass ho jaata h..

const newNums3 = myNums.map((num) => num*10).map((num) => {
    return num + 10
})

console.log(newNums3)


const newNums4 = myNums.map((num => num * 10))
                        .map((num) => num + 10)
                        .filter((num) => num >=50)

return newNums4


