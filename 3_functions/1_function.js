function underWater(){
    console.log("O")
    console.log("C")
    console.log("E")
    console.log("A")
    console.log("N")
}

underWater // kucch output nahi aayega...
underWater()
underWater()


// function ke name ke baad paranthesis laga diya to function call ho gayi...
// simply bas fn name likha h matlab function ko reference kar rha h....


// waf to add two numbers

// function ki definition ke time jo pass karte h i.e. parameter...
function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

addTwoNumbers(3,5) // 8

addTwoNumbers(4, "88") // 488

addTwoNumbers(10, "b") // 10b

// yaha par jo paas hota h wo argument
addTwoNumbers(3, null) // 3




const result = addTwoNumbers(5, 9)

console.log("Result = ", result) // Result =  undefined

// now let's define a proper function which can return the result...

function multiplyTwoNum(num1, num2){
    return num1 * num2
}

let ans = multiplyTwoNum(4, 9)
console.log(ans) // 36


// return ke neeche wala unreachable code...


// agar yaha userName = "monkey" daal diya.. to phir .. bydefault wahi aayega.. agar
// user ne kucch aur nahi daala to...

function loginUserName(userName){

    if (userName === undefined){
        console.log("please enter a username")
        return
    }

    // or similarly equivalently...

    if (!userName){
        console.log("please enter a username")
        return 
    }

    return `${userName} just logged in`
}


console.log(loginUserName("bricks")) // bricks just logged in


console.log(loginUserName("")) //  just logged in

console.log(loginUserName()) // undefined just logged in


// -----

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(4))

// but in case we need to pass multiple parameters then it is better to use REST or SPREAD operator ...

function calculateCartPriceFlipkart(val1, val2, val3, ...num1){
    return num1
}

console.log(calculateCartPriceFlipkart(100, 4, 198, 34,53, 2,2,3,4))

// pehle teen to val1, val2, val3 ne le liye baaki baache huye ab saare num1 ek array 
// mai insert karta jayega...


function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and its price is ${anyobject.price}`)
}

// 

handleObject(
    {
        userName: "john", 
        price: 57
    }
)

function returnSecondValue(getArray){
    return getArray[1]
}


let myVal = returnSecondValue([4,5,3,1])
console.log(myVal) // 5

