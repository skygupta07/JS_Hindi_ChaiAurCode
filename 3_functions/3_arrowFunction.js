/*

const user = {
    userName : "akash",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)

        console.log(this)
    }
}


user.welcomeMessage()

console.log(user.price)

// this aapka current context ko refer karta h... aap change bhi kar sakte ho...



user.userName = "bob"

console.log(this) // {} - bahar ka context to khali h chalega...

user.welcomeMessage()

console.log(this) // {} - bahar ka context to khali h chalega...


// browser ke andar global object hota h window object(chrome inspect), the reason why you are able to capture most of the 
// window events


*/

// function mai this ka utna koi  use nahi kar paye...

function chai(){
    let userName = "jeans"
    console.log(this)

    console.log(this.userName) // undefined
}

chai()


const myFunction = function () {
    const userName = "ag"

    console.log(this.userName) // undefined
}


console.log(this.userName) // undefined

console.log(myFunction.userName) // undefined


const tea = () => {
    let clientName = "raft"

    console.log(this.clientName)
}

tea()

console.log(this.clientName)


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4, 5))

// arrow function mai implicit return jab ek hi line ka code ho..to phir curly braces aur return dono 
// hata sakte ho....


// agar curly braces laga diya to return statement lagana hi padega...

const multiplyTwoNum = (num1, num2) => (num1 * num2)

console.log(multiplyTwoNum(4, 8))

// object ko return karne ke liye usko aapko () paranthesis mai wrap karna hi padega...
// nahi use kiya tha...to undefined aa rha tha....

const plusTwo = (num) => ({userName: "blue"})

console.log(plusTwo(4))