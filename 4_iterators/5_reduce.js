// Reduce ----

const yourArray = [1,2,3]

const myTotal = yourArray.reduce((acc, currVal) => {
    console.log(`accumulator : ${acc} and currVal : ${currVal}`)
    return acc + currVal
}, 0)

console.log(myTotal)

// easy method

const yourTotal = yourArray.reduce((acc, curr) => acc + curr, 0)

console.log(yourTotal)

const shoppingCart = [
    {
        itemName: "js Course", 
        price: 2345
    },
    {
        itemName: "web dev", 
        price: 234
    },
    {
        itemName: "devops", 
        price: 34
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)